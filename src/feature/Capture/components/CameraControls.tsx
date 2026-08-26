"use client";

import {
  Check,
  RotateCcw,
  SwitchCamera,
} from "lucide-react";

import styles from "@/components/animations/css/capture/CameraControls.module.css";

interface CameraControlsProps {
  isCameraReady: boolean;
  isCapturing: boolean;
  hasCapturedPhoto: boolean;

  onSwitchCamera: () => void;
  onCapture: () => void;
  onRetake: () => void;
  onConfirm: () => void;
}

export default function CameraControls({
  isCameraReady,
  isCapturing,
  hasCapturedPhoto,
  onSwitchCamera,
  onCapture,
  onRetake,
  onConfirm,
}: CameraControlsProps) {
  if (hasCapturedPhoto) {
    return (
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.retakeButton}
          onClick={onRetake}
        >
          <RotateCcw
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>Retake</span>
        </button>

        <button
          type="button"
          className={styles.confirmButton}
          onClick={onConfirm}
        >
          <Check
            size={17}
            strokeWidth={2.2}
            aria-hidden="true"
          />

          <span>Use this smile</span>
        </button>
      </div>
    );
  }

  const controlsDisabled =
    !isCameraReady ||
    isCapturing;

  return (
    <div className={styles.controls}>
      <button
        type="button"
        className={styles.secondaryControl}
        onClick={onSwitchCamera}
        disabled={controlsDisabled}
        aria-label="Switch camera"
      >
        <SwitchCamera
          size={19}
          strokeWidth={1.9}
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        className={styles.captureButton}
        onClick={onCapture}
        disabled={controlsDisabled}
        aria-label={
          isCapturing
            ? "Capturing smile"
            : "Capture smile"
        }
      >
        <span
          className={styles.captureButtonInner}
          aria-hidden="true"
        />
      </button>

      <div
        className={styles.controlSpacer}
        aria-hidden="true"
      />
    </div>
  );
}