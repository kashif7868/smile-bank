"use client";

import { useEffect, useState } from "react";

import styles from "./PagePreloader.module.css";

export default function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 500);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 850);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`${styles.preloader} ${
        isLeaving ? styles.preloaderLeaving : ""
      }`}
      role="status"
      aria-label="Loading Smile Bank"
    >
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <div className={styles.logo}>
            <svg
              viewBox="0 0 80 80"
              className={styles.logoSvg}
              aria-hidden="true"
            >
              <circle
                cx="40"
                cy="40"
                r="38"
                fill="#FFC84D"
              />

              <circle
                cx="29"
                cy="32"
                r="3"
                fill="#075C58"
              />

              <circle
                cx="51"
                cy="32"
                r="3"
                fill="#075C58"
              />

              <path
                d="M25 45C28.8 52 33.5 55 40 55C46.5 55 51.2 52 55 45"
                fill="none"
                stroke="#075C58"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span
            className={styles.pulseRing}
            aria-hidden="true"
          />
        </div>

        <div className={styles.brand}>
          Smile Bank
        </div>

        <p className={styles.tagline}>
          Preserving smiles that matter.
        </p>

        <div
          className={styles.loader}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}