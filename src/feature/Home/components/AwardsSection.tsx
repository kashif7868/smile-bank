import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react";

import styles from "@/components/animations/css/home/AwardsSection.module.css";

const featuredSmiles = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=82",
    alt: "Smiling portrait",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=82",
    alt: "Smiling portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=82",
    alt: "Smiling portrait",
  },
];

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className={styles.section}
      aria-labelledby="smile-world-awards-title"
    >
      <div
        className={styles.glowOne}
        aria-hidden="true"
      />

      <div
        className={styles.glowTwo}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundPattern}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowIcon}>
              <Award
                size={15}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span>
              Smile of the World
            </span>

            <span
              className={styles.eyebrowDot}
              aria-hidden="true"
            />

            <span className={styles.eyebrowMeta}>
              Annual recognition
            </span>
          </div>

          <h2
            id="smile-world-awards-title"
            className={styles.title}
          >
            One world.
            <span>
              Three smiles to remember.
            </span>
          </h2>

          <p className={styles.description}>
            A yearly celebration of meaningful smiles shared
            voluntarily by people around the world. Private
            memories stay outside the awards unless you
            explicitly choose to make them public.
          </p>

          <div className={styles.actions}>
            <Link
              href="/awards"
              className={styles.primaryButton}
              aria-label="Explore Smile of the World awards"
            >
              <Trophy
                size={18}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              <span>
                Explore awards
              </span>

              <ArrowRight
                size={16}
                strokeWidth={2}
                className={styles.buttonArrow}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/open-account"
              className={styles.secondaryButton}
              aria-label="Create your Smile Bank account"
            >
              <UsersRound
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              <span>
                Create Smile Bank
              </span>
            </Link>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <LockKeyhole
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className={styles.trustText}>
                <strong>
                  Private stays private
                </strong>

                <small>
                  Private smiles are never entered
                </small>
              </span>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>
                <Globe2
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>

              <span className={styles.trustText}>
                <strong>
                  Open to the world
                </strong>

                <small>
                  Public participation across regions
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div
            className={styles.visualGlow}
            aria-hidden="true"
          />

          <div className={styles.awardShowcase}>
            <div className={styles.showcaseHeader}>
              <div className={styles.showcaseHeading}>
                <span className={styles.showcaseIcon}>
                  <Sparkles
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span className={styles.showcaseHeadingText}>
                  <span>
                    Global recognition
                  </span>

                  <strong>
                    Smile of the World
                  </strong>
                </span>
              </div>

              <span className={styles.liveBadge}>
                Annual
              </span>
            </div>

            <div className={styles.portraitStage}>
              <div
                className={styles.globeWatermark}
                aria-hidden="true"
              >
                <Globe2
                  size={150}
                  strokeWidth={0.8}
                />
              </div>

              <div className={styles.portraitGrid}>
                {featuredSmiles.map((smile, index) => (
                  <div
                    key={smile.id}
                    className={`${styles.portraitCard} ${
                      index === 1
                        ? styles.featuredPortrait
                        : ""
                    }`}
                  >
                    <Image
                      src={smile.src}
                      alt={smile.alt}
                      fill
                      sizes="(max-width: 640px) 28vw, 150px"
                      className={styles.portraitImage}
                    />

                    <div
                      className={styles.portraitOverlay}
                      aria-hidden="true"
                    />

                    <span className={styles.portraitRank}>
                      {index + 1}
                    </span>

                    {index === 1 && (
                      <span className={styles.winnerBadge}>
                        <Trophy
                          size={11}
                          strokeWidth={2}
                          aria-hidden="true"
                        />

                        Winner
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.showcaseFooter}>
              <div className={styles.winnerCount}>
                <span className={styles.winnerCountIcon}>
                  <Award
                    size={17}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>

                <span>
                  <strong>
                    3 selected smiles
                  </strong>

                  <small>
                    Recognized each year
                  </small>
                </span>
              </div>

              <span className={styles.globalBadge}>
                <Globe2
                  size={13}
                  strokeWidth={2}
                  aria-hidden="true"
                />

                Global
              </span>
            </div>
          </div>

          <div className={styles.consentCard}>
            <span className={styles.consentIcon}>
              <ShieldCheck
                size={18}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span className={styles.consentContent}>
              <strong>
                Consent comes first
              </strong>

              <small>
                You decide whether a smile becomes public.
              </small>
            </span>

            <LockKeyhole
              size={16}
              strokeWidth={1.9}
              className={styles.consentLock}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}