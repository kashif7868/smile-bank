import FooterBottom from "./components/FooterBottom";
import FooterBrand from "./components/FooterBrand";
import FooterNavigation from "./components/FooterNavigation";

import styles from "@/components/animations/css/footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div
        className={styles.backgroundGlow}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundGlowSecondary}
        aria-hidden="true"
      />

      <div
        className={styles.backgroundPattern}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.top}>
          <FooterBrand />
          <FooterNavigation />
        </div>

        <div
          className={styles.divider}
          aria-hidden="true"
        />

        <FooterBottom />
      </div>
    </footer>
  );
}