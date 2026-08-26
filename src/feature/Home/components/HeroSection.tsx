import Link from "next/link";
import {
  ArrowRight,
  Award,
  Camera,
  Eye,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SmilePreviewCard from "./SmilePreviewCard";

import styles from "@/components/animations/css/home/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="smile-bank-hero-title"
    >
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
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowIcon}>
              <ShieldCheck
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span>Private by default</span>

            <span
              className={styles.eyebrowDot}
              aria-hidden="true"
            />

            <span className={styles.eyebrowAccent}>
              AI assisted
            </span>
          </div>

          <h1
            id="smile-bank-hero-title"
            className={styles.title}
          >
            Deposit a smile.
            <span>
              Keep the moment forever.
            </span>
          </h1>

          <p className={styles.description}>
            Build a private home for the smiles that matter.
            Capture several moments, let AI help identify the
            clearest natural smile, and stay in control of
            everything you keep or share.
          </p>

          <div className={styles.actions}>
            <Link
              href="/capture"
              className={styles.primaryButton}
              aria-label="Deposit a smile"
            >
              <span className={styles.primaryButtonIcon}>
                <Camera
                  size={19}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span>Deposit a smile</span>

              <ArrowRight
                size={17}
                strokeWidth={2}
                className={styles.primaryButtonArrow}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/#awards"
              className={styles.secondaryButton}
              aria-label="Explore Smile of the World awards"
            >
              <Award
                size={18}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              <span>Explore awards</span>

              <ArrowRight
                size={16}
                strokeWidth={2}
                className={styles.secondaryButtonArrow}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            className={styles.trustRow}
            aria-label="Smile Bank privacy features"
          >
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <LockKeyhole
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className={styles.trustText}>
                <strong>Private vault</strong>
                <small>Your memories stay protected</small>
              </span>
            </div>

            <div
              className={styles.trustDivider}
              aria-hidden="true"
            />

            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <Eye
                  size={17}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className={styles.trustText}>
                <strong>Your visibility</strong>
                <small>You decide what becomes public</small>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div
            className={styles.visualHalo}
            aria-hidden="true"
          />

          <div
            className={styles.visualAccent}
            aria-hidden="true"
          />

          <div className={styles.previewWrapper}>
            <SmilePreviewCard />
          </div>

          <div className={styles.aiBadge}>
            <span className={styles.aiBadgeIcon}>
              <Sparkles
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span className={styles.badgeContent}>
              <span className={styles.badgeEyebrow}>
                AI selection
              </span>

              <strong>Best Smile</strong>

              <small>
                Helps find your clearest natural shot
              </small>
            </span>
          </div>

          <div className={styles.privacyBadge}>
            <span className={styles.privacyBadgeIcon}>
              <LockKeyhole
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span className={styles.badgeContent}>
              <span className={styles.badgeEyebrow}>
                Privacy
              </span>

              <strong>Yours by default</strong>

              <small>
                Public only when you choose
              </small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}