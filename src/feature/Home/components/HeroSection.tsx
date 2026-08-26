import Link from "next/link";

import SmilePreviewCard from "./SmilePreviewCard";

import styles from "@/components/animations/css/home/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlowOne} aria-hidden="true" />
      <div className={styles.backgroundGlowTwo} aria-hidden="true" />
      <div className={styles.backgroundPattern} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3L19 6V11C19 15.5 16.2 19.1 12 21C7.8 19.1 5 15.5 5 11V6L12 3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span>Private by default</span>
          </div>

          <h1 className={styles.title}>
            Deposit today&apos;s smile.
            <span>Withdraw a lifetime of memories.</span>
          </h1>

          <p className={styles.description}>
            Build a private family vault for the smiles that matter. Capture
            multiple moments, let AI help find the clearest natural smile, and
            decide exactly what stays private or becomes public.
          </p>

          <div className={styles.actions}>
            <Link
              href="/open-account"
              className={styles.primaryButton}
            >
              <span className={styles.primaryButtonIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 5V19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 12H19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              Deposit a smile
            </Link>

            <Link
              href="/#awards"
              className={styles.secondaryButton}
            >
              Explore awards

              <span className={styles.secondaryButtonArrow} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M5 12H19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 6L19 12L13 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M8 10V7.5C8 5.6 9.6 4 12 4C14.4 4 16 5.6 16 7.5V10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span>Encrypted memories</span>
            </div>

            <span className={styles.trustDivider} />

            <div className={styles.trustItem}>
              <span className={styles.trustIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M4 12C6 8.7 8.7 7 12 7C15.3 7 18 8.7 20 12C18 15.3 15.3 17 12 17C8.7 17 6 15.3 4 12Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>

              <span>You control visibility</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualHalo} aria-hidden="true" />

          <div className={styles.previewWrapper}>
            <SmilePreviewCard />
          </div>

          <div className={styles.aiBadge}>
            <span className={styles.aiBadgeIcon}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 3L13.7 8.3L19 10L13.7 11.7L12 17L10.3 11.7L5 10L10.3 8.3L12 3Z"
                  fill="currentColor"
                />
                <path
                  d="M18.5 15L19.2 17.3L21.5 18L19.2 18.7L18.5 21L17.8 18.7L15.5 18L17.8 17.3L18.5 15Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <span>
              <strong>AI Best Shot</strong>
              Finds your clearest natural smile
            </span>
          </div>

          <div className={styles.privacyBadge}>
            <span className={styles.privacyBadgeDot} />

            <span>
              <strong>Private vault</strong>
              Public only with consent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}