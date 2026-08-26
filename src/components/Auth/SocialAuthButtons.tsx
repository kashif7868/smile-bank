"use client";

import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import styles from "@/components/animations/css/auth/SocialAuthButtons.module.css";

interface SocialAuthButtonsProps {
  mode: "sign-in" | "sign-up";
}

export default function SocialAuthButtons({
  mode,
}: SocialAuthButtonsProps) {
  const actionLabel =
    mode === "sign-in"
      ? "Continue with Google"
      : "Sign up with Google";

  return (
    <div className={styles.social}>
      <button
        type="button"
        className={styles.googleButton}
        aria-label={actionLabel}
      >
        <span
          className={styles.googleIcon}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.35 12.24C21.35 11.51 21.29 10.97 21.16 10.41H12V13.93H17.38C17.27 14.81 16.69 16.13 15.4 17.02L15.38 17.14L18.26 19.32L18.46 19.34C20.29 17.69 21.35 15.26 21.35 12.24Z"
              fill="#4285F4"
            />

            <path
              d="M12 21.5C14.62 21.5 16.82 20.66 18.46 19.34L15.4 17.02C14.58 17.57 13.47 17.96 12 17.96C9.48 17.96 7.34 16.31 6.58 14.03L6.47 14.04L3.47 16.31L3.43 16.42C5.06 19.58 8.32 21.5 12 21.5Z"
              fill="#34A853"
            />

            <path
              d="M6.58 14.03C6.37 13.43 6.25 12.78 6.25 12.1C6.25 11.42 6.37 10.77 6.57 10.17L6.56 10.04L3.52 7.73L3.43 7.77C2.75 9.08 2.35 10.55 2.35 12.1C2.35 13.66 2.75 15.12 3.43 16.42L6.58 14.03Z"
              fill="#FBBC05"
            />

            <path
              d="M12 6.24C13.83 6.24 15.06 7 15.76 7.64L18.53 5C16.83 3.45 14.62 2.7 12 2.7C8.32 2.7 5.06 4.62 3.43 7.77L6.57 10.17C7.34 7.89 9.48 6.24 12 6.24Z"
              fill="#EA4335"
            />
          </svg>
        </span>

        <span className={styles.buttonContent}>
          <strong>
            {actionLabel}
          </strong>

          <small>
            Quick and secure account access
          </small>
        </span>

        <ArrowRight
          size={16}
          strokeWidth={2}
          className={styles.buttonArrow}
          aria-hidden="true"
        />
      </button>

      <div className={styles.securityNote}>
        <ShieldCheck
          size={12}
          strokeWidth={2}
          aria-hidden="true"
        />

        <span>
          Smile Bank never posts or shares on your behalf.
        </span>
      </div>
    </div>
  );
}