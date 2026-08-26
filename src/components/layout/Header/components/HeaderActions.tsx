import Link from "next/link";
import {
  ArrowUpRight,
  UserRound,
} from "lucide-react";

import styles from "@/components/animations/css/header/HeaderActions.module.css";

export default function HeaderActions() {
  return (
    <div className={styles.headerActions}>
      <Link
        href="/auth?mode=sign-in"
        className={styles.signInButton}
        aria-label="Sign in to Smile Bank"
      >
        <UserRound
          size={16}
          strokeWidth={1.9}
          className={styles.actionIcon}
          aria-hidden="true"
        />

        <span>Sign in</span>
      </Link>

      <Link
        href="/auth?mode=sign-up"
        className={styles.openAccountButton}
        aria-label="Open your Smile Bank account"
      >
        <span>Open account</span>

        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className={styles.openAccountIcon}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}