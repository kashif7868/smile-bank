"use client";

import {
  Check,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import CameraControls from "./CameraControls";
import CameraPermission from "./CameraPermission";
import CapturePreview from "./CapturePreview";

import type {
  CameraPermissionStatus,
} from "./CameraPermission";

import styles from "@/components/animations/css/capture/CameraView.module.css";

export type CameraFacingMode =
  | "user"
  | "environment";

export interface CapturedSmile {
  blob: Blob;
  url: string;

  width: number;
  height: number;

  mimeType: string;
  fileName: string;

  facingMode: CameraFacingMode;

  capturedAt: string;
}

interface CameraViewProps {
  onCaptureConfirmed?: (
    photo: CapturedSmile,
  ) => void;
}

interface ImageCaptureInstance {
  takePhoto: () => Promise<Blob>;
}

interface ImageCaptureConstructor {
  new (
    track: MediaStreamTrack,
  ): ImageCaptureInstance;
}

type WindowWithImageCapture =
  Window & {
    ImageCapture?: ImageCaptureConstructor;
  };

/* =========================================================
   CAMERA CONSTRAINTS
========================================================= */

function getUltraQualityConstraints(
  facingMode: CameraFacingMode,
): MediaStreamConstraints {
  return {
    audio: false,

    video: {
      facingMode: {
        ideal: facingMode,
      },

      width: {
        ideal: 3840,
      },

      height: {
        ideal: 2160,
      },

      frameRate: {
        ideal: 30,
      },
    },
  };
}

function getFullHdConstraints(
  facingMode: CameraFacingMode,
): MediaStreamConstraints {
  return {
    audio: false,

    video: {
      facingMode: {
        ideal: facingMode,
      },

      width: {
        ideal: 1920,
      },

      height: {
        ideal: 1080,
      },

      frameRate: {
        ideal: 30,
      },
    },
  };
}

function getBasicConstraints(
  facingMode: CameraFacingMode,
): MediaStreamConstraints {
  return {
    audio: false,

    video: {
      facingMode: {
        ideal: facingMode,
      },
    },
  };
}

/* =========================================================
   HELPERS
========================================================= */

function canvasToBlob(
  canvas: HTMLCanvasElement,
): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob(
      resolve,
      "image/jpeg",
      0.96,
    );
  });
}

async function getBlobDimensions(
  blob: Blob,
): Promise<{
  width: number;
  height: number;
}> {
  if (
    typeof createImageBitmap ===
    "function"
  ) {
    const bitmap =
      await createImageBitmap(blob);

    const dimensions = {
      width: bitmap.width,
      height: bitmap.height,
    };

    bitmap.close();

    return dimensions;
  }

  return new Promise(
    (resolve, reject) => {
      const imageUrl =
        URL.createObjectURL(blob);

      const image = new Image();

      image.onload = () => {
        const dimensions = {
          width: image.naturalWidth,
          height: image.naturalHeight,
        };

        URL.revokeObjectURL(
          imageUrl,
        );

        resolve(dimensions);
      };

      image.onerror = () => {
        URL.revokeObjectURL(
          imageUrl,
        );

        reject(
          new Error(
            "Unable to read captured image dimensions.",
          ),
        );
      };

      image.src = imageUrl;
    },
  );
}

function createFileName(
  mimeType: string,
): string {
  const timestamp =
    new Date()
      .toISOString()
      .replace(/[:.]/g, "-");

  let extension = "jpg";

  if (
    mimeType.includes("png")
  ) {
    extension = "png";
  }

  if (
    mimeType.includes("webp")
  ) {
    extension = "webp";
  }

  return `smile-${timestamp}.${extension}`;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function CameraView({
  onCaptureConfirmed,
}: CameraViewProps) {
  const videoRef =
    useRef<HTMLVideoElement | null>(
      null,
    );

  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null,
    );

  const streamRef =
    useRef<MediaStream | null>(
      null,
    );

  const capturedUrlRef =
    useRef<string | null>(
      null,
    );

  const [
    status,
    setStatus,
  ] =
    useState<CameraPermissionStatus>(
      "requesting",
    );

  const [
    facingMode,
    setFacingMode,
  ] =
    useState<CameraFacingMode>(
      "user",
    );

  const [
    capturedPhoto,
    setCapturedPhoto,
  ] =
    useState<CapturedSmile | null>(
      null,
    );

  const [
    isCapturing,
    setIsCapturing,
  ] =
    useState(false);

  /* =======================================================
     STOP CAMERA
  ======================================================= */

  const stopCamera =
    useCallback(() => {
      const stream =
        streamRef.current;

      if (!stream) {
        return;
      }

      stream
        .getTracks()
        .forEach((track) => {
          track.stop();
        });

      streamRef.current = null;

      if (videoRef.current) {
        videoRef.current.srcObject =
          null;
      }
    }, []);

  /* =======================================================
     CLEAR CAPTURE
  ======================================================= */

  const clearCapturedPhoto =
    useCallback(() => {
      if (
        capturedUrlRef.current
      ) {
        URL.revokeObjectURL(
          capturedUrlRef.current,
        );

        capturedUrlRef.current =
          null;
      }

      setCapturedPhoto(null);
    }, []);

  /* =======================================================
     REQUEST CAMERA STREAM
  ======================================================= */

  const requestCameraStream =
    useCallback(
      async (
        requestedFacingMode:
          CameraFacingMode,
      ) => {
        const attempts:
          MediaStreamConstraints[] =
          [
            getUltraQualityConstraints(
              requestedFacingMode,
            ),

            getFullHdConstraints(
              requestedFacingMode,
            ),

            getBasicConstraints(
              requestedFacingMode,
            ),

            {
              audio: false,
              video: true,
            },
          ];

        let lastError:
          | unknown
          | null = null;

        for (
          const constraints
          of attempts
        ) {
          try {
            return await navigator
              .mediaDevices
              .getUserMedia(
                constraints,
              );
          } catch (error) {
            lastError = error;

            if (
              error instanceof
                DOMException &&
              error.name ===
                "NotAllowedError"
            ) {
              throw error;
            }
          }
        }

        throw (
          lastError ??
          new Error(
            "Unable to access camera.",
          )
        );
      },
      [],
    );

  /* =======================================================
     ATTACH STREAM TO VIDEO
  ======================================================= */

  const attachStreamToVideo =
    useCallback(
      async (
        stream: MediaStream,
      ) => {
        const video =
          videoRef.current;

        if (!video) {
          return;
        }

        video.srcObject = stream;
        video.muted = true;

        await video.play();
      },
      [],
    );

  /* =======================================================
     START CAMERA
  ======================================================= */

  const startCamera =
    useCallback(
      async (
        requestedFacingMode:
          CameraFacingMode,
      ) => {
        stopCamera();

        setStatus(
          "requesting",
        );

        if (
          typeof window ===
            "undefined" ||
          !window.isSecureContext ||
          !navigator.mediaDevices
            ?.getUserMedia
        ) {
          setStatus(
            "unavailable",
          );

          return;
        }

        try {
          const stream =
            await requestCameraStream(
              requestedFacingMode,
            );

          streamRef.current =
            stream;

          const videoTrack =
            stream
              .getVideoTracks()[0];

          if (
            videoTrack &&
            "contentHint"
              in videoTrack
          ) {
            try {
              videoTrack.contentHint =
                "detail";
            } catch {
              // Unsupported by browser.
            }
          }

          await attachStreamToVideo(
            stream,
          );

          setStatus("ready");
        } catch (error) {
          if (
            error instanceof
            DOMException
          ) {
            if (
              error.name ===
              "NotAllowedError"
            ) {
              setStatus(
                "denied",
              );

              return;
            }

            if (
              error.name ===
                "NotFoundError" ||
              error.name ===
                "OverconstrainedError"
            ) {
              setStatus(
                "unavailable",
              );

              return;
            }
          }

          setStatus("error");
        }
      },
      [
        attachStreamToVideo,
        requestCameraStream,
        stopCamera,
      ],
    );

  /* =======================================================
     INITIAL CAMERA
  ======================================================= */

  useEffect(() => {
    void startCamera("user");

    return () => {
      stopCamera();

      if (
        capturedUrlRef.current
      ) {
        URL.revokeObjectURL(
          capturedUrlRef.current,
        );
      }
    };
  }, [
    startCamera,
    stopCamera,
  ]);

  /* =======================================================
     REATTACH CAMERA AFTER RETAKE
  ======================================================= */

  useEffect(() => {
    if (
      capturedPhoto ||
      status !== "ready" ||
      !streamRef.current ||
      !videoRef.current
    ) {
      return;
    }

    void attachStreamToVideo(
      streamRef.current,
    );
  }, [
    capturedPhoto,
    status,
    attachStreamToVideo,
  ]);

  /* =======================================================
     IMAGE CAPTURE API
  ======================================================= */

  const captureUsingImageCapture =
    async (): Promise<
      | {
          blob: Blob;
          width: number;
          height: number;
        }
      | null
    > => {
      const stream =
        streamRef.current;

      if (!stream) {
        return null;
      }

      const track =
        stream
          .getVideoTracks()[0];

      if (!track) {
        return null;
      }

      const ImageCaptureClass =
        (
          window as
            WindowWithImageCapture
        ).ImageCapture;

      if (!ImageCaptureClass) {
        return null;
      }

      try {
        const imageCapture =
          new ImageCaptureClass(
            track,
          );

        const blob =
          await imageCapture
            .takePhoto();

        const dimensions =
          await getBlobDimensions(
            blob,
          );

        return {
          blob,

          width:
            dimensions.width,

          height:
            dimensions.height,
        };
      } catch {
        return null;
      }
    };

  /* =======================================================
     CANVAS FALLBACK
  ======================================================= */

  const captureUsingCanvas =
    async (): Promise<
      | {
          blob: Blob;
          width: number;
          height: number;
        }
      | null
    > => {
      const video =
        videoRef.current;

      const canvas =
        canvasRef.current;

      if (
        !video ||
        !canvas ||
        video.videoWidth <= 0 ||
        video.videoHeight <= 0
      ) {
        return null;
      }

      const width =
        video.videoWidth;

      const height =
        video.videoHeight;

      canvas.width = width;
      canvas.height = height;

      const context =
        canvas.getContext(
          "2d",
          {
            alpha: false,
          },
        );

      if (!context) {
        return null;
      }

      /*
       * Front camera preview is mirrored,
       * but saved image remains unmirrored.
       */

      context.drawImage(
        video,
        0,
        0,
        width,
        height,
      );

      const blob =
        await canvasToBlob(
          canvas,
        );

      if (!blob) {
        return null;
      }

      return {
        blob,
        width,
        height,
      };
    };

  /* =======================================================
     CAPTURE
  ======================================================= */

  const capturePhoto =
    async () => {
      if (
        status !== "ready" ||
        isCapturing
      ) {
        return;
      }

      setIsCapturing(true);

      try {
        let result =
          await captureUsingImageCapture();

        if (!result) {
          result =
            await captureUsingCanvas();
        }

        if (!result) {
          return;
        }

        clearCapturedPhoto();

        const url =
          URL.createObjectURL(
            result.blob,
          );

        capturedUrlRef.current =
          url;

        const mimeType =
          result.blob.type ||
          "image/jpeg";

        setCapturedPhoto({
          blob:
            result.blob,

          url,

          width:
            result.width,

          height:
            result.height,

          mimeType,

          fileName:
            createFileName(
              mimeType,
            ),

          facingMode,

          capturedAt:
            new Date()
              .toISOString(),
        });
      } finally {
        setIsCapturing(false);
      }
    };

  /* =======================================================
     SWITCH CAMERA
  ======================================================= */

  const switchCamera =
    async () => {
      if (isCapturing) {
        return;
      }

      clearCapturedPhoto();

      const nextFacingMode:
        CameraFacingMode =
        facingMode === "user"
          ? "environment"
          : "user";

      setFacingMode(
        nextFacingMode,
      );

      await startCamera(
        nextFacingMode,
      );
    };

  /* =======================================================
     RETAKE
  ======================================================= */

  const retakePhoto = () => {
    clearCapturedPhoto();
  };

  /* =======================================================
     RETRY
  ======================================================= */

  const retryCamera = () => {
    clearCapturedPhoto();

    void startCamera(
      facingMode,
    );
  };

  /* =======================================================
     CONFIRM
  ======================================================= */

  const confirmPhoto = () => {
    if (!capturedPhoto) {
      return;
    }

    onCaptureConfirmed?.(
      capturedPhoto,
    );
  };

  const isFrontCamera =
    facingMode === "user";

  const isCameraReady =
    status === "ready";

  return (
    <div className={styles.camera}>
      {!capturedPhoto ? (
        <div className={styles.viewport}>
          <video
            ref={videoRef}
            className={`${styles.video} ${
              isFrontCamera
                ? styles.videoMirrored
                : ""
            }`}
            autoPlay
            muted
            playsInline
            disablePictureInPicture
          />

          <CameraPermission
            status={status}
            onRetry={retryCamera}
          />

          {isCameraReady && (
            <div
              className={
                styles.liveBadge
              }
            >
              <span
                className={
                  styles.liveDot
                }
                aria-hidden="true"
              />

              <span>
                Camera ready
              </span>
            </div>
          )}
        </div>
      ) : (
        <CapturePreview
          photo={capturedPhoto}
        />
      )}

      <canvas
        ref={canvasRef}
        className={styles.canvas}
        aria-hidden="true"
      />

      <CameraControls
        isCameraReady={
          isCameraReady
        }
        isCapturing={
          isCapturing
        }
        hasCapturedPhoto={
          Boolean(
            capturedPhoto,
          )
        }
        onSwitchCamera={() => {
          void switchCamera();
        }}
        onCapture={() => {
          void capturePhoto();
        }}
        onRetake={
          retakePhoto
        }
        onConfirm={
          confirmPhoto
        }
      />
    </div>
  );
}