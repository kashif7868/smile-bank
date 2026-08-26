import Link from "next/link";

import {
  Award,
  Globe2,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/home/AwardsSection.module.css";

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className={styles.section}
    >
      <div
        className={styles.glowOne}
        aria-hidden="true"
      />

      <div
        className={styles.glowTwo}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <Award
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>
              Annual global recognition
            </span>
          </div>

          <h2 className={styles.title}>
            One world.
            <span>Three smiles to remember.</span>
          </h2>

          <p className={styles.description}>
            Smile of the World celebrates meaningful smiles
            shared voluntarily by people around the globe.
            Your private memories never enter the award
            unless you explicitly make them public.
          </p>

          <div className={styles.actions}>
            <Link
              href="/awards"
              className={styles.primaryButton}
            >
              Explore awards

              <span aria-hidden="true">
                →
              </span>
            </Link>

            <Link
              href="/open-account"
              className={styles.secondaryButton}
            >
              Create Smile Bank
            </Link>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <LockKeyhole
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              <span>
                Private smiles excluded
              </span>
            </div>

            <div className={styles.trustItem}>
              <Globe2
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              <span>
                Global participation
              </span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.world}>
            <div className={styles.worldRingOne} />
            <div className={styles.worldRingTwo} />

            <Globe2
              size={92}
              strokeWidth={1.15}
              className={styles.globeIcon}
              aria-hidden="true"
            />

            <span className={styles.smilePointOne}>
              🙂
            </span>

            <span className={styles.smilePointTwo}>
              🙂
            </span>

            <span className={styles.smilePointThree}>
              🙂
            </span>
          </div>

          <div className={styles.awardCard}>
            <span className={styles.awardIcon}>
              <Sparkles
                size={19}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <div>
              <span className={styles.awardLabel}>
                Smile of the World
              </span>

              <strong>
                3 annual winners
              </strong>
            </div>
          </div>

          <div className={styles.consentCard}>
            <LockKeyhole
              size={17}
              strokeWidth={1.9}
              aria-hidden="true"
            />

            <div>
              <strong>
                Consent first
              </strong>

              <span>
                You choose what becomes public.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}