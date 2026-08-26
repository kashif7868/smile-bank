import Link from "next/link";

import styles from "@/components/animations/css/footer/Footer.module.css";

const productLinks = [
  {
    label: "How it works",
    href: "/#how-it-works",
  },
  {
    label: "Privacy",
    href: "/#privacy",
  },
  {
    label: "Awards",
    href: "/#awards",
  },
];

const accountLinks = [
  {
    label: "Smile Vault",
    href: "/vault",
  },
  {
    label: "Deposit a smile",
    href: "/capture",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Consent Policy",
    href: "/consent-policy",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="Smile Bank home"
            >
              <span className={styles.logoIcon} aria-hidden="true">
                <svg
                  viewBox="0 0 40 40"
                  className={styles.logoSvg}
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="#FFC84D"
                  />

                  <circle
                    cx="14.5"
                    cy="15.5"
                    r="1.6"
                    fill="#075C58"
                  />

                  <circle
                    cx="25.5"
                    cy="15.5"
                    r="1.6"
                    fill="#075C58"
                  />

                  <path
                    d="M12.5 22C14.4 25.3 16.8 27 20 27C23.2 27 25.6 25.3 27.5 22"
                    fill="none"
                    stroke="#075C58"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span className={styles.logoText}>
                Smile Bank
              </span>
            </Link>

            <p className={styles.description}>
              A private place for the smiles that matter.
              Preserve family memories, choose your best
              moments and decide exactly what stays private
              or becomes public.
            </p>

            <div className={styles.trustBadge}>
              <span className={styles.trustIcon}>
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

              <span>
                Private by default
              </span>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h2 className={styles.columnTitle}>
                Explore
              </h2>

              <ul className={styles.linkList}>
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={styles.footerLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h2 className={styles.columnTitle}>
                Account
              </h2>

              <ul className={styles.linkList}>
                {accountLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={styles.footerLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h2 className={styles.columnTitle}>
                Trust
              </h2>

              <ul className={styles.linkList}>
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={styles.footerLink}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Smile Bank. All rights reserved.
          </p>

          <p className={styles.privacyStatement}>
            Your smile is yours. Public only with your consent.
          </p>
        </div>
      </div>
    </footer>
  );
}