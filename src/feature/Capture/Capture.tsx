"use client";

import {
  Camera,
  RotateCcw,
  ShieldCheck,
  Sparkles,
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

  return (
    <main className={styles.page}>
      <div
        className={
          styles.backgroundGlowOne
        }
        aria-hidden="true"
      />

      <div
        className={
          styles.backgroundGlowTwo
        }
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* ============================================
            HEADER
        ============================================= */}

        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <Sparkles
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>
              {stage === "camera"
                ? "Smile Capture"
                : "Smile Review"}
            </span>
          </div>

          <h1 className={styles.title}>
            {stage === "camera"
              ? "Capture your smile"
              : "Review your smile"}
          </h1>

          <p className={styles.description}>
            {stage === "camera"
              ? "Use your phone camera or webcam to capture a clear natural smile. You’ll review everything before anything is saved."
              : "Check your captured smile before continuing. Your original image quality is preserved."}
          </p>
        </header>

        {/* ============================================
            CAMERA
        ============================================= */}

        {stage === "camera" && (
          <section
            className={
              styles.cameraSection
            }
            aria-label="Smile camera"
          >
            <CameraView
              onCaptureConfirmed={
                handleCaptureConfirmed
              }
            />
          </section>
        )}

        {/* ============================================
            REVIEW
        ============================================= */}

        {stage === "review" &&
          selectedSmile &&
          reviewImageUrl && (
            <section
              className={
                styles.reviewSection
              }
              aria-label="Review captured smile"
            >
              <div
                className={
                  styles.reviewPreview
                }
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
              </div>

              <div
                className={
                  styles.reviewDetails
                }
              >
                <div
                  className={
                    styles.reviewPrivacy
                  }
                >
                  <ShieldCheck
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>
                    This image remains on your
                    device until you choose the
                    next action.
                  </span>
                </div>

                <div
                  className={
                    styles.reviewActions
                  }
                >
                  <button
                    type="button"
                    className={
                      styles.retakeButton
                    }
                    onClick={
                      handleRetake
                    }
                  >
                    <RotateCcw
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />

                    <span>
                      Retake photo
                    </span>
                  </button>
                </div>
              </div>
            </section>
          )}

        {/* ============================================
            TRUST
        ============================================= */}

        <div className={styles.trustRow}>
          <div
            className={styles.trustItem}
          >
            <Camera
              size={15}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>
              High-quality camera capture
            </span>
          </div>

          <span
            className={
              styles.trustDivider
            }
            aria-hidden="true"
          />

          <div
            className={styles.trustItem}
          >
            <ShieldCheck
              size={15}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>
              Nothing is saved without your
              approval
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}