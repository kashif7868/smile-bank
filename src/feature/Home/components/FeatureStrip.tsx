import Link from "next/link";
import {
  ArrowRight,
  Award,
  Camera,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import styles from "@/components/animations/css/home/FeatureStrip.module.css";

type FeatureTone =
  | "capture"
  | "ai"
  | "privacy"
  | "award";

interface Feature {
  id: string;
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  icon: LucideIcon;
  tone: FeatureTone;
  action?: {
    label: string;
    href: string;
  };
}

const features: Feature[] = [
  {
    id: "capture",
    step: "01",
    eyebrow: "Capture",
    title: "Take a few natural smiles",
    description:
      "Capture several moments instead of relying on a single photo.",
    meta: "1–10 photos",
    icon: Camera,
    tone: "capture",
    action: {
      label: "Deposit a smile",
      href: "/capture",
    },
  },
  {
    id: "ai-best-shot",
    step: "02",
    eyebrow: "AI assist",
    title: "Find your best natural shot",
    description:
      "Smile Bank AI helps surface the clearest smile while the final choice stays yours.",
    meta: "You stay in control",
    icon: Sparkles,
    tone: "ai",
  },
  {
    id: "privacy",
    step: "03",
    eyebrow: "Protect",
    title: "Keep it inside your private vault",
    description:
      "Every smile stays private by default until you explicitly decide otherwise.",
    meta: "Private by default",
    icon: LockKeyhole,
    tone: "privacy",
  },
  {
    id: "awards",
    step: "04",
    eyebrow: "Optional",
    title: "Share a smile with the world",
    description:
      "Only smiles you intentionally make public can take part in Smile of the World.",
    meta: "Consent required",
    icon: Award,
    tone: "award",
    action: {
      label: "Explore awards",
      href: "/#awards",
    },
  },
];

export default function FeatureStrip() {
  return (
    <section
      id="how-it-works"
      className={styles.section}
      aria-labelledby="how-smile-bank-works"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.headingEyebrow}>
            <span className={styles.headingEyebrowIcon}>
              <Sparkles
                size={14}
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>

            <span>How Smile Bank works</span>
          </div>

          <h2
            id="how-smile-bank-works"
            className={styles.headingTitle}
          >
            From a smile
            <span> to a memory worth keeping.</span>
          </h2>

          <p className={styles.headingDescription}>
            A simple four-step experience designed around
            your privacy, your choice and your memories.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                id={feature.id}
                className={`${styles.card} ${
                  styles[feature.tone]
                }`}
              >
                <div className={styles.cardTop}>
                  <span className={styles.step}>
                    {feature.step}
                  </span>

                  <span className={styles.iconWrap}>
                    <Icon
                      size={22}
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardEyebrow}>
                    {feature.eyebrow}
                  </span>

                  <h3 className={styles.cardTitle}>
                    {feature.title}
                  </h3>

                  <p className={styles.cardDescription}>
                    {feature.description}
                  </p>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.meta}>
                    <span
                      className={styles.metaDot}
                      aria-hidden="true"
                    />

                    {feature.meta}
                  </span>

                  {feature.action && (
                    <Link
                      href={feature.action.href}
                      className={styles.cardAction}
                      aria-label={feature.action.label}
                    >
                      <span>
                        {feature.action.label}
                      </span>

                      <ArrowRight
                        size={15}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.bottomNote}>
          <LockKeyhole
            size={15}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>
            Nothing becomes public without your choice.
          </span>
        </div>
      </div>
    </section>
  );
}