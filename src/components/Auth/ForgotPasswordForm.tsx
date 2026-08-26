"use client";

import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";
import {
  FormEvent,
  useState,
} from "react";

import styles from "@/components/animations/css/auth/ForgotPasswordForm.module.css";

interface ForgotPasswordFormProps {
  onBackToSignIn: () => void;
}

export default function ForgotPasswordForm({
  onBackToSignIn,
}: ForgotPasswordFormProps) {
  const [email, setEmail] =
    useState("");

  const [isSubmitted, setIsSubmitted] =
    useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    /*
     * Forgot-password API integration
     * will be added here.
     *
     * Example future flow:
     * await requestPasswordReset(email);
     */

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div
        className={styles.success}
        role="status"
        aria-live="polite"
      >
        <span
          className={styles.successIcon}
        >
          <CheckCircle2
            size={24}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <div
          className={styles.successContent}
        >
          <strong>
            Check your email
          </strong>

          <p>
            If an account exists for{" "}
            <span>{email}</span>, we&apos;ll
            send password reset instructions.
          </p>
        </div>

        <div
          className={styles.successNote}
        >
          <ShieldCheck
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>
            For your privacy, we don&apos;t confirm
            whether an email is registered.
          </span>
        </div>

        <button
          type="button"
          className={styles.backButton}
          onClick={onBackToSignIn}
        >
          <ArrowLeft
            size={15}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>
            Back to sign in
          </span>
        </button>

        <button
          type="button"
          className={styles.resendButton}
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

        <div
          className={styles.inputWrapper}
        >
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
              setEmail(event.target.value)
            }
            className={styles.input}
            placeholder="you@example.com"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>
      </div>

      <div className={styles.infoNote}>
        <ShieldCheck
          size={15}
          strokeWidth={2}
          aria-hidden="true"
        />

        <p>
          We&apos;ll send a secure reset link
          if this email is connected to a
          Smile Bank account.
        </p>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
      >
        <span
          className={styles.submitIcon}
        >
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

      <button
        type="button"
        className={styles.secondaryBackButton}
        onClick={onBackToSignIn}
      >
        <ArrowLeft
          size={14}
          strokeWidth={2}
          aria-hidden="true"
        />

        <span>
          Back to sign in
        </span>
      </button>
    </form>
  );
}