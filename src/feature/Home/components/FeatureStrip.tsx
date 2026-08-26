import Link from "next/link";
import {
  Award,
  Camera,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

import styles from "@/components/animations/css/home/FeatureStrip.module.css";

const features = [
  {
    id: "capture",
    title: "Capture your smile",
    description:
      "Take multiple photos and keep the moment that feels most natural.",
    icon: Camera,
    accent: "yellow",
  },
  {
    id: "ai-best-shot",
    title: "AI Best Shot",
    description:
      "AI helps identify the clearest natural smile while you keep final control.",
    icon: Sparkles,
    accent: "green",
  },
  {
    id: "privacy",
    title: "Private Smile Vault",
    description:
      "Your memories stay private unless you explicitly decide to share them.",
    icon: LockKeyhole,
    accent: "green",
  },
  {
    id: "awards",
    title: "Smile of the World",
    description:
      "Only smiles you intentionally make public can participate in awards.",
    icon: Award,
    accent: "yellow",
  },
];

export default function FeatureStrip() {
  return (
    <section
      id="how-it-works"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            How Smile Bank works
          </span>

          <h2>
            One smile. Four simple steps.
          </h2>

          <p>
            Capture, choose, protect and share only when you want to.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                id={feature.id}
                className={styles.card}
              >
                <div
                  className={`${styles.iconWrap} ${
                    feature.accent === "yellow"
                      ? styles.iconYellow
                      : styles.iconGreen
                  }`}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </div>

                <span className={styles.step}>
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                {feature.id === "capture" && (
                  <Link
                    href="/capture"
                    className={styles.captureLink}
                  >
                    Deposit a smile
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}