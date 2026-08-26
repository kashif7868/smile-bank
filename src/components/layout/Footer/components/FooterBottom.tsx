import Link from "next/link";
import {
  Heart,
  LockKeyhole,
} from "lucide-react";

import styles from "@/components/animations/css/footer/FooterBottom.module.css";

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.bottom}>
      <div className={styles.copyright}>
        <span>
          © {currentYear} Smile Bank.
        </span>

        <span>
          All rights reserved.
        </span>
      </div>

      <div className={styles.privacyStatement}>
        <LockKeyhole
          size={14}
          strokeWidth={2}
          aria-hidden="true"
        />

        <span>
          Your smile is yours. Public only with your consent.
        </span>
      </div>

      <div className={styles.metaLinks}>
        <Link
          href="/privacy"
          className={styles.metaLink}
        >
          Privacy
        </Link>

        <span
          className={styles.metaDot}
          aria-hidden="true"
        />

        <Link
          href="/terms"
          className={styles.metaLink}
        >
          Terms
        </Link>

        <span
          className={styles.metaDot}
          aria-hidden="true"
        />

        <span className={styles.madeWith}>
          Built for
          <Heart
            size={12}
            strokeWidth={2}
            aria-hidden="true"
          />
          memories
        </span>
      </div>
    </div>
  );
}