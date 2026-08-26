import Link from "next/link";
import {
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/footer/FooterBrand.module.css";

export default function FooterBrand() {
  return (
    <div className={styles.brandColumn}>
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
                id="footerSmileGradient"
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
                  stopColor="#ECAF36"
                />
              </linearGradient>

              <linearGradient
                id="footerSmileGreen"
                x1="15"
                y1="13"
                x2="34"
                y2="35"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0"
                  stopColor="#118579"
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
              fill="url(#footerSmileGradient)"
            />

            <path
              d="M24 10.5C19.1 10.5 15.1 12.2 12.5 14.1V23.1C12.5 30.8 17.2 35.5 24 38.4C30.8 35.5 35.5 30.8 35.5 23.1V14.1C32.9 12.2 28.9 10.5 24 10.5Z"
              fill="rgba(255,255,255,0.9)"
            />

            <circle
              cx="19.5"
              cy="21"
              r="1.65"
              fill="url(#footerSmileGreen)"
            />

            <circle
              cx="28.5"
              cy="21"
              r="1.65"
              fill="url(#footerSmileGreen)"
            />

            <path
              d="M17.5 26.2C19 29.1 21.2 30.6 24 30.6C26.8 30.6 29 29.1 30.5 26.2"
              stroke="url(#footerSmileGreen)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            <path
              d="M34.3 7.8L35.2 10.2L37.6 11.1L35.2 12L34.3 14.4L33.4 12L31 11.1L33.4 10.2L34.3 7.8Z"
              fill="#FFFFFF"
            />
          </svg>
        </span>

        <span className={styles.logoContent}>
          <span className={styles.logoText}>
            Smile Bank
          </span>

          <span className={styles.logoTagline}>
            AI Memory Vault
          </span>
        </span>
      </Link>

      <p className={styles.description}>
        A private home for meaningful smiles. Preserve the
        moments that matter, let AI help find your best shot,
        and decide exactly what stays private or becomes public.
      </p>

      <div className={styles.trustRow}>
        <div className={styles.trustBadge}>
          <ShieldCheck
            size={15}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>
            Private by default
          </span>
        </div>

        <div className={styles.trustBadge}>
          <LockKeyhole
            size={15}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>
            Consent first
          </span>
        </div>
      </div>

      <div className={styles.aiNote}>
        <span className={styles.aiNoteIcon}>
          <Sparkles
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <span>
          AI assists your choices. It never decides what becomes public.
        </span>
      </div>
    </div>
  );
}