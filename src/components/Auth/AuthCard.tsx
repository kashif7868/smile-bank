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

      <AuthPanel
        initialMode={initialMode}
        redirectPath={redirectPath}
      />
    </div>
  );
}