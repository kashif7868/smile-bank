"use client";

import { useEffect, useState } from "react";

import styles from "./PagePreloader.module.css";

export default function PagePreloader() {
  const [isVisible, setIsVisible] =
    useState(true);

  const [isLeaving, setIsLeaving] =
    useState(false);

  useEffect(() => {
    const leaveTimer =
      window.setTimeout(() => {
        setIsLeaving(true);
      }, 380);

    const removeTimer =
      window.setTimeout(() => {
        setIsVisible(false);
      }, 650);

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
        isLeaving
          ? styles.preloaderLeaving
          : ""
      }`}
      role="status"
      aria-label="Loading Smile Bank"
      aria-live="polite"
    >
      <div className={styles.content}>
        <div
          className={styles.logo}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 48 48"
            className={styles.logoSvg}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <defs>
              <linearGradient
                id="preloaderGold"
                x1="7"
                y1="5"
                x2="41"
                y2="43"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0"
                  stopColor="#FFE08A"
                />

                <stop
                  offset="0.55"
                  stopColor="#F7C653"
                />

                <stop
                  offset="1"
                  stopColor="#ECB138"
                />
              </linearGradient>

              <linearGradient
                id="preloaderGreen"
                x1="15"
                y1="13"
                x2="34"
                y2="35"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0"
                  stopColor="#0F7A72"
                />

                <stop
                  offset="1"
                  stopColor="#073F3C"
                />
              </linearGradient>
            </defs>

            <rect
              x="3"
              y="3"
              width="42"
              height="42"
              rx="14"
              fill="url(#preloaderGold)"
            />

            <path
              d="M24 10.5C19.1 10.5 15.1 12.2 12.5 14.1V23.1C12.5 30.8 17.2 35.5 24 38.4C30.8 35.5 35.5 30.8 35.5 23.1V14.1C32.9 12.2 28.9 10.5 24 10.5Z"
              fill="rgba(255,255,255,0.92)"
            />

            <circle
              cx="19.5"
              cy="21"
              r="1.65"
              fill="url(#preloaderGreen)"
            />

            <circle
              cx="28.5"
              cy="21"
              r="1.65"
              fill="url(#preloaderGreen)"
            />

            <path
              d="M17.5 26.2C19 29.1 21.2 30.6 24 30.6C26.8 30.6 29 29.1 30.5 26.2"
              stroke="url(#preloaderGreen)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={styles.brand}>
          Smile Bank
        </div>

        <div
          className={styles.progress}
          aria-hidden="true"
        >
          <span />
        </div>
      </div>
    </div>
  );
}