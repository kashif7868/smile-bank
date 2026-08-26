import Link from "next/link";
import {
  ArrowLeft,
  Camera,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import AuthCard from "./AuthCard";

import styles from "@/components/animations/css/auth/AuthPage.module.css";

interface AuthPageProps {
  initialMode?: string;
  redirectPath?: string;
}

type AuthMode =
  | "sign-in"
  | "sign-up"
  | "forgot-password";

function resolveAuthMode(
  mode?: string,
): AuthMode {
  if (mode === "sign-up") {
    return "sign-up";
  }

  if (mode === "forgot-password") {
    return "forgot-password";
  }

  return "sign-in";
}

export default function AuthPage({
  initialMode,
  redirectPath,
}: AuthPageProps) {
  const resolvedMode =
    resolveAuthMode(initialMode);

  return (
    <main className={styles.page}>
      <div
        className={styles.backgroundGlowOne}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlowTwo}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundPattern}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* ============================================
            LEFT BRAND CONTENT
        ============================================= */}

        <section
          className={styles.brandSide}
          aria-label="Smile Bank"
        >
          <div className={styles.brandTop}>
            <Link
              href="/"
              className={styles.backLink}
              aria-label="Back to Smile Bank home"
            >
              <ArrowLeft
                size={15}
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>Back home</span>
            </Link>
          </div>

          <div className={styles.brandContent}>
            <div className={styles.eyebrow}>
              <Sparkles
                size={14}
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>
                Your private smile space
              </span>
            </div>

            <h1 className={styles.title}>
              Save the smiles

              <span>
                you never want to lose.
              </span>
            </h1>

            <p className={styles.description}>
              Capture meaningful moments, let AI
              help find your clearest natural smile,
              and stay in complete control of what
              remains private or becomes public.
            </p>

            <div className={styles.featureList}>
              <div className={styles.feature}>
                <span
                  className={styles.featureIcon}
                >
                  <LockKeyhole
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span
                  className={
                    styles.featureContent
                  }
                >
                  <strong>
                    Private by default
                  </strong>

                  <small>
                    Your memories remain yours.
                  </small>
                </span>
              </div>

              <div className={styles.feature}>
                <span
                  className={styles.featureIcon}
                >
                  <Camera
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span
                  className={
                    styles.featureContent
                  }
                >
                  <strong>
                    AI-assisted capture
                  </strong>

                  <small>
                    Find your clearest natural shot.
                  </small>
                </span>
              </div>

              <div className={styles.feature}>
                <span
                  className={styles.featureIcon}
                >
                  <ShieldCheck
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span
                  className={
                    styles.featureContent
                  }
                >
                  <strong>
                    Consent-first sharing
                  </strong>

                  <small>
                    You decide what becomes public.
                  </small>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.brandFooter}>
            <ShieldCheck
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>
              Your private smiles stay private unless
              you explicitly choose to share them.
            </span>
          </div>
        </section>

        {/* ============================================
            AUTH PANEL
        ============================================= */}

        <section
          className={styles.authSide}
          aria-label="Smile Bank account access"
        >
          <AuthCard
            initialMode={resolvedMode}
            redirectPath={redirectPath}
          />
        </section>
      </div>
    </main>
  );
}