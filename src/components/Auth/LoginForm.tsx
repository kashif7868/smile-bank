"use client";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  LogIn,
  Mail,
} from "lucide-react";
import { useState } from "react";

import type { FormEvent } from "react";

import styles from "@/components/animations/css/auth/LoginForm.module.css";

interface LoginFormProps {
  redirectPath?: string;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
}

export default function LoginForm({
  redirectPath,
  onForgotPassword,
  onCreateAccount,
}: LoginFormProps) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [rememberMe, setRememberMe] =
    useState(true);

  const [showPassword, setShowPassword] =
    useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    /*
     * Login API integration will be added here.
     *
     * Successful login:
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
          EMAIL
      ============================================= */}

      <div className={styles.field}>
        <label
          htmlFor="login-email"
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
            id="login-email"
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
        <div className={styles.labelRow}>
          <label
            htmlFor="login-password"
            className={styles.label}
          >
            Password
          </label>

          <button
            type="button"
            className={styles.forgotButton}
            onClick={onForgotPassword}
          >
            Forgot password?
          </button>
        </div>

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
            id="login-password"
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
            placeholder="Enter your password"
            autoComplete="current-password"
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
          REMEMBER ME
      ============================================= */}

      <div className={styles.options}>
        <label className={styles.remember}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(event) =>
              setRememberMe(
                event.target.checked,
              )
            }
            className={styles.checkboxInput}
          />

          <span
            className={styles.customCheckbox}
            aria-hidden="true"
          />

          <span>
            Keep me signed in
          </span>
        </label>
      </div>

      {/* ============================================
          SIGN IN
      ============================================= */}

      <button
        type="submit"
        className={styles.submitButton}
      >
        <span className={styles.submitIcon}>
          <LogIn
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <span>
          Sign in
        </span>

        <span
          className={styles.submitArrow}
          aria-hidden="true"
        >
          →
        </span>
      </button>

      {/* ============================================
          CREATE ACCOUNT
      ============================================= */}

      <div className={styles.createAccount}>
        <span>
          New to Smile Bank?
        </span>

        <button
          type="button"
          onClick={onCreateAccount}
        >
          Create account
        </button>
      </div>
    </form>
  );
}