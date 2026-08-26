import AwardsSection from "./components/AwardsSection";
import FeatureStrip from "./components/FeatureStrip";
import HeroSection from "./components/HeroSection";

import styles from "@/components/animations/css/home/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <FeatureStrip />
      <AwardsSection />
    </div>
  );
}