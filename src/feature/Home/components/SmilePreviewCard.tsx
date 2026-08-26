import Image from "next/image";
import {
  Camera,
  Check,
  Images,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/home/SmilePreviewCard.module.css";

const smilePhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=82",
    alt: "Selected smiling portrait",
    selected: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=82",
    alt: "Alternative smiling portrait",
    selected: false,
  },
];

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

          <span className={styles.headerContent}>
            <strong>Today&apos;s Smile</strong>
            <small>2 moments captured</small>
          </span>
        </div>

        <div className={styles.encryptedBadge}>
          <LockKeyhole
            size={12}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>Private</span>
        </div>
      </div>

      <div className={styles.photoArea}>
        <div className={styles.photoGrid}>
          {smilePhotos.map((photo) => (
            <div
              key={photo.id}
              className={`${styles.photoCard} ${photo.selected
                  ? styles.selectedPhoto
                  : styles.secondaryPhoto
                }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={photo.selected}
                sizes="(max-width: 640px) 42vw, 200px"
                className={styles.photo}
              />

              <div
                className={styles.photoOverlay}
                aria-hidden="true"
              />

              {photo.selected ? (
                <>
                  <span className={styles.aiPickBadge}>
                    <Sparkles
                      size={11}
                      strokeWidth={2}
                      aria-hidden="true"
                    />

                    AI Pick
                  </span>

                  <span className={styles.selectedCheck}>
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>

                  <span className={styles.confidenceBadge}>
                    <strong>96%</strong>
                    <small>clarity</small>
                  </span>
                </>
              ) : (
                <span className={styles.alternativeBadge}>
                  Alternative
                </span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.captureMeta}>
          <span className={styles.captureMetaItem}>
            <Images
              size={13}
              strokeWidth={1.9}
              aria-hidden="true"
            />

            2 photos
          </span>

          <span className={styles.captureMetaDot} />

          <span className={styles.captureMetaItem}>
            <ShieldCheck
              size={13}
              strokeWidth={1.9}
              aria-hidden="true"
            />

            Not shared
          </span>
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
          <span className={styles.aiEyebrow}>
            Smile Bank AI
          </span>

          <strong>
            We found your clearest natural smile
          </strong>

          <span>
            You&apos;re always free to choose another photo.
          </span>
        </div>

        <span className={styles.aiCheck}>
          <Check
            size={14}
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
      </div>

      <div className={styles.footer}>
        <div className={styles.privacy}>
          <span className={styles.privacyIcon}>
            <LockKeyhole
              size={13}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>

          <span className={styles.privacyText}>
            <strong>Private by default</strong>
            <small>Share only when you choose</small>
          </span>
        </div>

        <span className={styles.readyBadge}>
          Ready to save
        </span>
      </div>
    </div>
  );
}