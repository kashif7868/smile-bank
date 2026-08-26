import {
  Camera,
  Check,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/home/SmilePreviewCard.module.css";

export default function SmilePreviewCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.headerTitle}>
          <span className={styles.headerIcon}>
            <Camera
              size={17}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>

          <div>
            <strong>Today&apos;s Smile Deposit</strong>
            <span>Capture your best moment</span>
          </div>
        </div>

        <div className={styles.encryptedBadge}>
          <LockKeyhole
            size={12}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>Encrypted</span>
        </div>
      </div>

      <div className={styles.previewGrid}>
        <div className={`${styles.preview} ${styles.selectedPreview}`}>
          <span className={styles.selectedBadge}>
            <Check
              size={12}
              strokeWidth={2.4}
              aria-hidden="true"
            />
          </span>

          <div className={styles.face}>
            <span className={styles.hair} />

            <span className={styles.eyeLeft} />
            <span className={styles.eyeRight} />

            <span className={styles.smile} />
          </div>

          <div className={styles.personBody} />
        </div>

        <div className={`${styles.preview} ${styles.secondaryPreview}`}>
          <div className={styles.face}>
            <span className={styles.hair} />

            <span className={styles.eyeLeft} />
            <span className={styles.eyeRight} />

            <span className={styles.smileSmall} />
          </div>

          <div className={styles.personBody} />
        </div>
      </div>

      <div className={styles.aiResult}>
        <span className={styles.aiIcon}>
          <Sparkles
            size={17}
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>

        <div className={styles.aiContent}>
          <strong>
            AI selected the clearest natural smile
          </strong>

          <span>
            You stay in control and can choose another photo.
          </span>
        </div>

        <span className={styles.aiCheck}>
          <Check
            size={13}
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
      </div>

      <div className={styles.footer}>
        <div className={styles.privacy}>
          <span className={styles.privacyDot} />

          <span>
            Private until you choose to share
          </span>
        </div>

        <span className={styles.photoCount}>
          2 photos
        </span>
      </div>
    </div>
  );
}