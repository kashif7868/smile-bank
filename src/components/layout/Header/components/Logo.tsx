import Link from "next/link";

import styles from "@/components/animations/css/header/Logo.module.css";

export default function Logo() {
  return (
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
              id="smileBankLogoGradient"
              x1="8"
              y1="5"
              x2="40"
              y2="43"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#FFD96F" />
              <stop offset="0.55" stopColor="#F7C653" />
              <stop offset="1" stopColor="#ECB138" />
            </linearGradient>

            <linearGradient
              id="smileBankLogoGreen"
              x1="15"
              y1="13"
              x2="34"
              y2="35"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#0F7A72" />
              <stop offset="1" stopColor="#073F3C" />
            </linearGradient>

            <filter
              id="smileBankLogoShadow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="4"
                floodColor="#073F3C"
                floodOpacity="0.12"
              />
            </filter>
          </defs>

          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="14"
            fill="url(#smileBankLogoGradient)"
            filter="url(#smileBankLogoShadow)"
          />

          <path
            d="M24 10.5C19.1 10.5 15.1 12.2 12.5 14.1V23.1C12.5 30.8 17.2 35.5 24 38.4C30.8 35.5 35.5 30.8 35.5 23.1V14.1C32.9 12.2 28.9 10.5 24 10.5Z"
            fill="rgba(255,255,255,0.9)"
          />

          <circle
            cx="19.5"
            cy="21"
            r="1.65"
            fill="url(#smileBankLogoGreen)"
          />

          <circle
            cx="28.5"
            cy="21"
            r="1.65"
            fill="url(#smileBankLogoGreen)"
          />

          <path
            d="M17.5 26.2C19 29.1 21.2 30.6 24 30.6C26.8 30.6 29 29.1 30.5 26.2"
            stroke="url(#smileBankLogoGreen)"
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
  );
}