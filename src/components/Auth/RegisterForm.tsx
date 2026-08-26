"use client";

import Link from "next/link";
import {
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
  UserPlus,
} from "lucide-react";
import {
  FormEvent,
  useMemo,
  useState,
} from "react";

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
  const [email, setEmail] =
    useState("");

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

  const [acceptedTerms, setAcceptedTerms] =
    useState(false);

  const passwordsMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const passwordStrength = useMemo(() => {
    if (!password) {
      return 0;
    }

    let score = 0;

    if (password.length >= 8) {
      score += 1;
    }

    if (/[A-Z]/.test(password)) {
      score += 1;
    }

    if (/[0-9]/.test(password)) {
      score += 1;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1;
    }

    return score;
  }, [password]);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      !acceptedTerms ||
      password !== confirmPassword
    ) {
      return;
    }

    /*
     * Registration API integration
     * will be added here.
     *
     * After successful registration:
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
      {/* ===============================================
          NAME
      ================================================ */}

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

      {/* ===============================================
          EMAIL
      ================================================ */}

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

      {/* ===============================================
          PASSWORD
      ================================================ */}

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
              setPassword(
                event.target.value,
              )
            }
            className={`${styles.input} ${styles.passwordInput}`}
            placeholder="Create a strong password"
            autoComplete="new-password"
            minLength={8}
            required
          />

          <button
            type="button"
            className={
              styles.passwordToggle
            }
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

        {password.length > 0 && (
          <div
            className={styles.strength}
            aria-label="Password strength"
          >
            <div
              className={
                styles.strengthBars
              }
            >
              {[1, 2, 3, 4].map(
                (level) => (
                  <span
                    key={level}
                    className={`${styles.strengthBar} ${
                      passwordStrength >=
                      level
                        ? styles.strengthBarActive
                        : ""
                    }`}
                  />
                ),
              )}
            </div>

            <span
              className={
                styles.strengthLabel
              }
            >
              {passwordStrength <= 1
                ? "Weak"
                : passwordStrength === 2
                  ? "Good"
                  : passwordStrength === 3
                    ? "Strong"
                    : "Excellent"}
            </span>
          </div>
        )}
      </div>

      {/* ===============================================
          CONFIRM PASSWORD
      ================================================ */}

      <div className={styles.field}>
        <label
          htmlFor="register-confirm-password"
          className={styles.label}
        >
          Confirm password
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
            required
          />

          <button
            type="button"
            className={
              styles.passwordToggle
            }
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

        {confirmPassword.length > 0 && (
          <div
            className={`${styles.matchStatus} ${
              passwordsMatch
                ? styles.matchSuccess
                : styles.matchError
            }`}
          >
            {passwordsMatch ? (
              <>
                <Check
                  size={12}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
                Passwords match
              </>
            ) : (
              <>
                <LockKeyhole
                  size={12}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Passwords do not match
              </>
            )}
          </div>
        )}
      </div>

      {/* ===============================================
          CONSENT
      ================================================ */}

      <label
        className={styles.consent}
      >
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(event) =>
            setAcceptedTerms(
              event.target.checked,
            )
          }
          className={
            styles.checkboxInput
          }
          required
        />

        <span
          className={
            styles.customCheckbox
          }
          aria-hidden="true"
        />

        <span
          className={styles.consentText}
        >
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

      {/* ===============================================
          SUBMIT
      ================================================ */}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={
          !acceptedTerms ||
          !passwordsMatch
        }
      >
        <span
          className={
            styles.submitIcon
          }
        >
          <UserPlus
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <span>
          Create my Smile Bank
        </span>

        <span
          className={
            styles.submitArrow
          }
          aria-hidden="true"
        >
          →
        </span>
      </button>

      {/* ===============================================
          ACCOUNT SWITCH
      ================================================ */}

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