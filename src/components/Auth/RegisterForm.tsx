"use client";

import Link from "next/link";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserPlus,
  UserRound,
} from "lucide-react";
import { useState } from "react";

import type { FormEvent } from "react";

import styles from "@/components/animations/css/auth/RegisterForm.module.css";

interface RegisterFormProps {
  redirectPath?: string;
  onSignIn: () => void;
}

export default function RegisterForm({
  redirectPath,
  onSignIn,
}: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [
    acceptedTerms,
    setAcceptedTerms,
  ] = useState(false);

  const hasConfirmPassword =
    confirmPassword.length > 0;

  const passwordsMatch =
    !hasConfirmPassword ||
    password === confirmPassword;

  const canSubmit =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    password.length >= 8 &&
    confirmPassword.length >= 8 &&
    password === confirmPassword &&
    acceptedTerms;

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    /*
     * Registration API integration
     * will be added here.
     *
     * Successful registration:
     * redirectPath
     *   ? router.push(redirectPath)
     *   : router.push("/vault")
     */

    void redirectPath;
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {/* ============================================
          FULL NAME
      ============================================= */}

      <div className={styles.field}>
        <label
          htmlFor="register-name"
          className={styles.label}
        >
          Full name
        </label>

        <div className={styles.inputWrapper}>
          <span
            className={styles.inputIcon}
            aria-hidden="true"
          >
            <UserRound
              size={17}
              strokeWidth={1.9}
            />
          </span>

          <input
            id="register-name"
            name="name"
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            className={styles.input}
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </div>
      </div>

      {/* ============================================
          EMAIL
      ============================================= */}

      <div className={styles.field}>
        <label
          htmlFor="register-email"
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
            id="register-email"
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

      {/* ============================================
          PASSWORD
      ============================================= */}

      <div className={styles.field}>
        <label
          htmlFor="register-password"
          className={styles.label}
        >
          Password
        </label>

        <div className={styles.inputWrapper}>
          <span
            className={styles.inputIcon}
            aria-hidden="true"
          >
            <LockKeyhole
              size={17}
              strokeWidth={1.9}
            />
          </span>

          <input
            id="register-password"
            name="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            className={`${styles.input} ${styles.passwordInput}`}
            placeholder="Minimum 8 characters"
            autoComplete="new-password"
            minLength={8}
            required
          />

          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() =>
              setShowPassword(
                (current) => !current,
              )
            }
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            aria-pressed={showPassword}
          >
            {showPassword ? (
              <EyeOff
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            ) : (
              <Eye
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* ============================================
          CONFIRM PASSWORD
      ============================================= */}

      <div className={styles.field}>
        <label
          htmlFor="register-confirm-password"
          className={styles.label}
        >
          Confirm password
        </label>

        <div
          className={`${styles.inputWrapper} ${
            hasConfirmPassword &&
            !passwordsMatch
              ? styles.inputWrapperError
              : ""
          }`}
        >
          <span
            className={styles.inputIcon}
            aria-hidden="true"
          >
            <LockKeyhole
              size={17}
              strokeWidth={1.9}
            />
          </span>

          <input
            id="register-confirm-password"
            name="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(
                event.target.value,
              )
            }
            className={`${styles.input} ${styles.passwordInput}`}
            placeholder="Enter password again"
            autoComplete="new-password"
            minLength={8}
            aria-invalid={
              hasConfirmPassword &&
              !passwordsMatch
            }
            required
          />

          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() =>
              setShowConfirmPassword(
                (current) => !current,
              )
            }
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
            aria-pressed={
              showConfirmPassword
            }
          >
            {showConfirmPassword ? (
              <EyeOff
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            ) : (
              <Eye
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            )}
          </button>
        </div>

        {hasConfirmPassword &&
          !passwordsMatch && (
            <p
              className={styles.fieldError}
              role="alert"
            >
              Passwords do not match.
            </p>
          )}
      </div>

      {/* ============================================
          CONSENT
      ============================================= */}

      <label className={styles.consent}>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(event) =>
            setAcceptedTerms(
              event.target.checked,
            )
          }
          className={styles.checkboxInput}
          required
        />

        <span
          className={styles.customCheckbox}
          aria-hidden="true"
        />

        <span className={styles.consentText}>
          I agree to the{" "}
          <Link href="/terms">
            Terms
          </Link>
          ,{" "}
          <Link href="/privacy">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/consent-policy">
            Consent Policy
          </Link>
          .
        </span>
      </label>

      {/* ============================================
          CREATE ACCOUNT
      ============================================= */}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={!canSubmit}
      >
        <span className={styles.submitIcon}>
          <UserPlus
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <span>
          Create account
        </span>

        <span
          className={styles.submitArrow}
          aria-hidden="true"
        >
          →
        </span>
      </button>

      {/* ============================================
          SIGN IN SWITCH
      ============================================= */}

      <div className={styles.signInSwitch}>
        <span>
          Already have an account?
        </span>

        <button
          type="button"
          onClick={onSignIn}
        >
          Sign in
        </button>
      </div>
    </form>
  );
}