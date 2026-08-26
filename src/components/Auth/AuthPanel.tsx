"use client";

import {
  ArrowLeft,
  LogIn,
  Sparkles,
  UserPlus,
} from "lucide-react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import SocialAuthButtons from "./SocialAuthButtons";

import styles from "@/components/animations/css/auth/AuthPanel.module.css";

export type AuthMode =
  | "sign-in"
  | "sign-up"
  | "forgot-password";

interface AuthPanelProps {
  initialMode?: AuthMode;
  redirectPath?: string;
}

const modeContent: Record<
  AuthMode,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  "sign-in": {
    eyebrow: "Welcome back",
    title: "Sign in to Smile Bank",
    description:
      "Access your private Smile Vault and continue preserving the moments that matter.",
  },

  "sign-up": {
    eyebrow: "Create your vault",
    title: "Open your Smile Bank",
    description:
      "Create your private account and start preserving meaningful smiles in one secure place.",
  },

  "forgot-password": {
    eyebrow: "Account recovery",
    title: "Reset your password",
    description:
      "Enter your email and we’ll help you securely regain access to your Smile Bank.",
  },
};

export default function AuthPanel({
  initialMode = "sign-in",
  redirectPath,
}: AuthPanelProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mode, setMode] =
    useState<AuthMode>(initialMode);

  const updateMode = (
    nextMode: AuthMode,
  ) => {
    setMode(nextMode);

    const params =
      new URLSearchParams(
        searchParams.toString(),
      );

    params.set("mode", nextMode);

    if (redirectPath) {
      params.set(
        "redirect",
        redirectPath,
      );
    }

    router.replace(
      `/auth?${params.toString()}`,
      {
        scroll: false,
      },
    );
  };

  const content = modeContent[mode];

  const isForgotPassword =
    mode === "forgot-password";

  return (
    <div className={styles.panel}>
      {/* ===============================================
          HEADER
      ================================================ */}

      <div className={styles.header}>
        {isForgotPassword ? (
          <button
            type="button"
            className={styles.backButton}
            onClick={() =>
              updateMode("sign-in")
            }
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
        ) : (
          <div className={styles.eyebrow}>
            <span
              className={
                styles.eyebrowIcon
              }
            >
              <Sparkles
                size={14}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span>
              {content.eyebrow}
            </span>
          </div>
        )}

        <h2 className={styles.title}>
          {content.title}
        </h2>

        <p
          className={
            styles.description
          }
        >
          {content.description}
        </p>
      </div>

      {/* ===============================================
          SIGN IN / SIGN UP SWITCH
      ================================================ */}

      {!isForgotPassword && (
        <div
          className={styles.modeSwitch}
          role="tablist"
          aria-label="Account access options"
        >
          <button
            type="button"
            role="tab"
            aria-selected={
              mode === "sign-in"
            }
            className={`${styles.modeButton} ${
              mode === "sign-in"
                ? styles.modeButtonActive
                : ""
            }`}
            onClick={() =>
              updateMode("sign-in")
            }
          >
            <LogIn
              size={15}
              strokeWidth={1.9}
              aria-hidden="true"
            />

            <span>
              Sign in
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={
              mode === "sign-up"
            }
            className={`${styles.modeButton} ${
              mode === "sign-up"
                ? styles.modeButtonActive
                : ""
            }`}
            onClick={() =>
              updateMode("sign-up")
            }
          >
            <UserPlus
              size={15}
              strokeWidth={1.9}
              aria-hidden="true"
            />

            <span>
              Sign up
            </span>
          </button>
        </div>
      )}

      {/* ===============================================
          AUTH CONTENT
      ================================================ */}

      <div className={styles.formArea}>
        {mode === "sign-in" && (
          <>
            <SocialAuthButtons
              mode="sign-in"
            />

            <div
              className={styles.divider}
            >
              <span />

              <small>
                or continue with email
              </small>

              <span />
            </div>

            <LoginForm
              redirectPath={
                redirectPath
              }
              onForgotPassword={() =>
                updateMode(
                  "forgot-password",
                )
              }
              onCreateAccount={() =>
                updateMode("sign-up")
              }
            />
          </>
        )}

        {mode === "sign-up" && (
          <>
            <SocialAuthButtons
              mode="sign-up"
            />

            <div
              className={styles.divider}
            >
              <span />

              <small>
                or create with email
              </small>

              <span />
            </div>

            <RegisterForm
              redirectPath={
                redirectPath
              }
              onSignIn={() =>
                updateMode("sign-in")
              }
            />
          </>
        )}

        {mode ===
          "forgot-password" && (
          <ForgotPasswordForm
            onBackToSignIn={() =>
              updateMode("sign-in")
            }
          />
        )}
      </div>

      {/* ===============================================
          BOTTOM SWITCH
      ================================================ */}

      {!isForgotPassword && (
        <div
          className={
            styles.bottomSwitch
          }
        >
          <span>
            {mode === "sign-in"
              ? "New to Smile Bank?"
              : "Already have an account?"}
          </span>

          <button
            type="button"
            onClick={() =>
              updateMode(
                mode === "sign-in"
                  ? "sign-up"
                  : "sign-in",
              )
            }
          >
            {mode === "sign-in"
              ? "Create account"
              : "Sign in"}
          </button>
        </div>
      )}
    </div>
  );
}