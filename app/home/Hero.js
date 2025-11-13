import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css"; // Import the CSS module

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <Image
        src="/global/hero-image.png"
        alt="Pure and Healthy Groundnut Oil"
        fill={true}
        priority={true}
        className={styles.heroBackgroundImage}
      />
      {/* This div is the dark overlay for better text readability */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        <h1>Pure & Healthy Groundnut Oil</h1>
        <p>
          Our groundnut oil is crafted using a traditional steam heating method,
          ensuring it is 100% pure, chemical-free, and packed with natural
          nutrition for a healthier life.
        </p>
        <Link href="/product" className={styles.btn}>
          ➔ ORDER NOW
        </Link>
      </div>
    </section>
  );
};

export default Hero;