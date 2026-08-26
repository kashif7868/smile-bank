"use client";

import {
  Camera,
  CameraOff,
  RefreshCcw,
} from "lucide-react";

import styles from "@/components/animations/css/capture/CameraPermission.module.css";

export type CameraPermissionStatus =
  | "requesting"
  | "ready"
  | "denied"
  | "unavailable"
  | "error";

interface CameraPermissionProps {
  status: CameraPermissionStatus;
  onRetry: () => void;
}

const permissionContent = {
  requesting: {
    title: "Starting camera",
    description:
      "Allow camera access when your browser asks.",
  },

  denied: {
    title: "Camera permission needed",
    description:
      "Allow camera access in your browser settings, then try again.",
  },

  unavailable: {
    title: "Camera unavailable",
    description:
      "Make sure a working camera is connected and the site is running over HTTPS.",
  },

  error: {
    title: "Couldn’t start camera",
    description:
      "Check your camera and browser permissions, then retry.",
  },
} as const;

export default function CameraPermission({
  status,
  onRetry,
}: CameraPermissionProps) {
  if (status === "ready") {
    return null;
  }

  const content =
    permissionContent[status];

  const isRequesting =
    status === "requesting";

  const canRetry =
    status === "denied" ||
    status === "error";

  return (
    <div
      className={styles.state}
      role="status"
      aria-live="polite"
    >
      <div
        className={styles.icon}
        aria-hidden="true"
      >
        {isRequesting ? (
          <Camera
            size={24}
            strokeWidth={1.8}
          />
        ) : (
          <CameraOff
            size={24}
            strokeWidth={1.8}
          />
        )}
      </div>

      <div className={styles.content}>
        <strong>
          {content.title}
        </strong>

        <span>
          {content.description}
        </span>
      </div>

      {canRetry && (
        <button
          type="button"
          className={styles.retryButton}
          onClick={onRetry}
        >
          <RefreshCcw
            size={15}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>
            {status === "denied"
              ? "Try again"
              : "Retry camera"}
          </span>
        </button>
      )}
    </div>
  );
}