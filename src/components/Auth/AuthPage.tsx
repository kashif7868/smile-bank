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

function resolveAuthMode(
  mode?: string,
): "sign-in" | "sign-up" | "forgot-password" {
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
        {/* ================================================
            BRAND / TRUST SIDE
        ================================================= */}

        <section
          className={styles.brandPanel}
          aria-label="About Smile Bank"
        >
          <div className={styles.brandTop}>
            <Link
              href="/"
              className={styles.backLink}
              aria-label="Return to Smile Bank home"
            >
              <ArrowLeft
                size={15}
                strokeWidth={2}
                aria-hidden="true"
              />

              <span>Back home</span>
            </Link>

            <Link
              href="/"
              className={styles.logo}
              aria-label="Smile Bank home"
            >
              <span
                className={styles.logoIcon}
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
                      id="authSmileGradient"
                      x1="8"
                      y1="5"
                      x2="40"
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
                      id="authSmileGreen"
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
                    fill="url(#authSmileGradient)"
                  />

                  <path
                    d="M24 10.5C19.1 10.5 15.1 12.2 12.5 14.1V23.1C12.5 30.8 17.2 35.5 24 38.4C30.8 35.5 35.5 30.8 35.5 23.1V14.1C32.9 12.2 28.9 10.5 24 10.5Z"
                    fill="rgba(255,255,255,0.9)"
                  />

                  <circle
                    cx="19.5"
                    cy="21"
                    r="1.65"
                    fill="url(#authSmileGreen)"
                  />

                  <circle
                    cx="28.5"
                    cy="21"
                    r="1.65"
                    fill="url(#authSmileGreen)"
                  />

                  <path
                    d="M17.5 26.2C19 29.1 21.2 30.6 24 30.6C26.8 30.6 29 29.1 30.5 26.2"
                    stroke="url(#authSmileGreen)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span className={styles.logoContent}>
                <strong>
                  Smile Bank
                </strong>

                <small>
                  AI Memory Vault
                </small>
              </span>
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
              help surface your clearest natural
              smile, and stay in complete control
              of what remains private or becomes
              public.
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
                    Your Smile Vault belongs to you.
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
                    Nothing becomes public by accident.
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
              Privacy and consent are built into every
              Smile Bank account.
            </span>
          </div>
        </section>

        {/* ================================================
            AUTH SIDE
        ================================================= */}

        <section
          className={styles.authPanel}
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