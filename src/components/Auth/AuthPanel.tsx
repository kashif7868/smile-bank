"use client";

import { ArrowLeft } from "lucide-react";
import {
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  useEffect,
  useState,
} from "react";

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
    title: string;
    description: string;
  }
> = {
  "sign-in": {
    title: "Sign in to Smile Bank",
    description:
      "Access your private Smile Vault and continue preserving the moments that matter.",
  },

  "sign-up": {
    title: "Open your Smile Bank",
    description:
      "Create your private account and start preserving meaningful smiles in one secure place.",
  },

  "forgot-password": {
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
  const searchParams =
    useSearchParams();

  const [mode, setMode] =
    useState<AuthMode>(initialMode);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

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
    } else {
      params.delete("redirect");
    }

    router.replace(
      `/auth?${params.toString()}`,
      {
        scroll: false,
      },
    );
  };

  const content =
    modeContent[mode];

  const isForgotPassword =
    mode === "forgot-password";

  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        {isForgotPassword && (
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
        )}

        <h2
          className={`${styles.title} ${
            isForgotPassword
              ? styles.titleWithBack
              : ""
          }`}
        >
          {content.title}
        </h2>

        <p className={styles.description}>
          {content.description}
        </p>
      </div>

      <div className={styles.formArea}>
        {mode === "sign-in" && (
          <>
            <SocialAuthButtons
              mode="sign-in"
            />

            <div className={styles.divider}>
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

            <div className={styles.divider}>
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
          <ForgotPasswordForm />
        )}
      </div>
    </div>
  );
}