import Image from "next/image";
import {
  Check,
  ImageIcon,
} from "lucide-react";

import styles from "@/components/animations/css/capture/CapturePreview.module.css";

interface CapturePreviewPhoto {
  url: string;
  width: number;
  height: number;
  mimeType: string;
}

interface CapturePreviewProps {
  photo: CapturePreviewPhoto;
}

export default function CapturePreview({
  photo,
}: CapturePreviewProps) {
  return (
    <div className={styles.preview}>
      <div className={styles.media}>
        <Image
          src={photo.url}
          alt="Your captured smile"
          fill
          unoptimized
          priority
          sizes="(max-width: 640px) 100vw, 900px"
          className={styles.image}
        />

        <div className={styles.readyBadge}>
          <Check
            size={14}
            strokeWidth={2.2}
            aria-hidden="true"
          />

          <span>Capture ready</span>
        </div>

        <div className={styles.qualityBadge}>
          <ImageIcon
            size={14}
            strokeWidth={1.9}
            aria-hidden="true"
          />

          <span>
            {photo.width} × {photo.height}
          </span>
        </div>
      </div>

      <div className={styles.meta}>
        <span>
          Original image quality preserved
        </span>

        <span
          className={styles.metaDivider}
          aria-hidden="true"
        />

        <span>
          {photo.mimeType}
        </span>
      </div>
    </div>
  );
}