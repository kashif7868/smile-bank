"use client";

import Link from "next/link";
import {
  ArrowLeft,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";

import CameraView from "./components/CameraView";
import CapturePreview from "./components/CapturePreview";

import type {
  CapturedSmile,
} from "./components/CameraView";

import styles from "@/components/animations/css/capture/Capture.module.css";

type CaptureStage =
  | "camera"
  | "review";

export default function Capture() {
  const [stage, setStage] =
    useState<CaptureStage>("camera");

  const [
    selectedSmile,
    setSelectedSmile,
  ] =
    useState<CapturedSmile | null>(
      null,
    );

  const [
    reviewImageUrl,
    setReviewImageUrl,
  ] =
    useState<string | null>(null);

  /* =======================================================
     REVIEW IMAGE URL
  ======================================================= */

  useEffect(() => {
    if (!selectedSmile) {
      setReviewImageUrl(null);

      return;
    }

    const url =
      URL.createObjectURL(
        selectedSmile.blob,
      );

    setReviewImageUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [selectedSmile]);

  /* =======================================================
     CAPTURE CONFIRMED
  ======================================================= */

  const handleCaptureConfirmed = (
    photo: CapturedSmile,
  ) => {
    setSelectedSmile(photo);
    setStage("review");
  };

  /* =======================================================
     RETAKE
  ======================================================= */

  const handleRetake = () => {
    setSelectedSmile(null);
    setStage("camera");
  };

  /* =======================================================
     CAMERA
  ======================================================= */

  if (stage === "camera") {
    return (
      <main className={styles.cameraPage}>
        <div className={styles.cameraShell}>
          <div className={styles.cameraTopBar}>
            <Link
              href="/"
              className={styles.backButton}
              aria-label="Close camera"
            >
              <ArrowLeft
                size={20}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>

            <div className={styles.cameraPrompt}>
              <strong>
                Keep smiling
              </strong>

              <span>
                Look naturally at the camera
              </span>
            </div>

            <div
              className={styles.topBarSpacer}
              aria-hidden="true"
            />
          </div>

          <div className={styles.cameraArea}>
            <CameraView
              onCaptureConfirmed={
                handleCaptureConfirmed
              }
            />
          </div>

          <div className={styles.cameraPrivacy}>
            <ShieldCheck
              size={13}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>
              Your photo stays private until
              you approve it
            </span>
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     REVIEW
  ======================================================= */

  return (
    <main className={styles.reviewPage}>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewTopBar}>
          <button
            type="button"
            className={styles.reviewBackButton}
            onClick={handleRetake}
            aria-label="Return to camera"
          >
            <ArrowLeft
              size={19}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>

          <div className={styles.reviewHeading}>
            <strong>
              Review your smile
            </strong>

            <span>
              Make sure you’re happy with
              the photo
            </span>
          </div>

          <div
            className={styles.topBarSpacer}
            aria-hidden="true"
          />
        </div>

        {selectedSmile &&
          reviewImageUrl && (
            <div
              className={styles.reviewCard}
            >
              <CapturePreview
                photo={{
                  url: reviewImageUrl,
                  width:
                    selectedSmile.width,
                  height:
                    selectedSmile.height,
                  mimeType:
                    selectedSmile.mimeType,
                }}
              />

              <div
                className={
                  styles.reviewBottom
                }
              >
                <div
                  className={
                    styles.reviewPrivacy
                  }
                >
                  <ShieldCheck
                    size={14}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>
                    This image is still only
                    on your device.
                  </span>
                </div>

                <button
                  type="button"
                  className={
                    styles.retakeButton
                  }
                  onClick={handleRetake}
                >
                  <RotateCcw
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>
                    Retake
                  </span>
                </button>
              </div>
            </div>
          )}
      </div>
    </main>
  );
}