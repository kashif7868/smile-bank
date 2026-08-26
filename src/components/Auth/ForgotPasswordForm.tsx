"use client";

import {
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";

import type { FormEvent } from "react";

import styles from "@/components/animations/css/auth/ForgotPasswordForm.module.css";

export default function ForgotPasswordForm() {
  const [email, setEmail] =
    useState("");

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    /*
     * Password reset API integration
     * will be added here.
     *
     * Always show the same success state
     * whether or not an account exists
     * for this email.
     */

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <div
          className={styles.successIcon}
          aria-hidden="true"
        >
          <CheckCircle2
            size={22}
            strokeWidth={2}
          />
        </div>

        <div className={styles.successContent}>
          <h3>
            Check your email
          </h3>

          <p>
            If an account exists for{" "}
            <strong>{email}</strong>,
            we&apos;ll send password reset
            instructions.
          </p>
        </div>

        <button
          type="button"
          className={styles.tryAgainButton}
          onClick={() =>
            setIsSubmitted(false)
          }
        >
          Use another email
        </button>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.field}>
        <label
          htmlFor="forgot-password-email"
          className={styles.label}
        >
          Email address
        </label>

        <div className={styles.inputWrapper}>
          <span
            className={styles.inputIcon}
            aria-hidden="true"
          >
            <Mail
              size={17}
              strokeWidth={1.9}
            />
          </span>

          <input
            id="forgot-password-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(
                event.target.value,
              )
            }
            className={styles.input}
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
      >
        <span className={styles.submitIcon}>
          <Send
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <span>
          Send reset link
        </span>

        <span
          className={styles.submitArrow}
          aria-hidden="true"
        >
          →
        </span>
      </button>
    </form>
  );
}