import {
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

import AuthPanel from "./AuthPanel";

import styles from "@/components/animations/css/auth/AuthCard.module.css";

type AuthMode =
  | "sign-in"
  | "sign-up"
  | "forgot-password";

interface AuthCardProps {
  initialMode: AuthMode;
  redirectPath?: string;
}

export default function AuthCard({
  initialMode,
  redirectPath,
}: AuthCardProps) {
  return (
    <div className={styles.card}>
      <div
        className={styles.glow}
        aria-hidden="true"
      />

      <div className={styles.cardHeader}>
        <div className={styles.securityBadge}>
          <span className={styles.securityIcon}>
            <LockKeyhole
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>

          <span>
            Secure account access
          </span>
        </div>

        <div
          className={styles.status}
          aria-label="Private by default"
        >
          <span
            className={styles.statusDot}
            aria-hidden="true"
          />

          <span>
            Private
          </span>
        </div>
      </div>

      <div className={styles.panelWrapper}>
        <AuthPanel
          initialMode={initialMode}
          redirectPath={redirectPath}
        />
      </div>

      <div className={styles.cardFooter}>
        <ShieldCheck
          size={14}
          strokeWidth={2}
          aria-hidden="true"
        />

        <p>
          Your account, private smiles and sharing
          choices stay under your control.
        </p>
      </div>
    </div>
  );
}