import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <Image
                src="/global/hero-image.png"
                alt="Pure groundnut oil in Jamnagar by Khodiyar Oil Mill"
                fill
                priority
                className={styles.heroBackgroundImage}
            />

            {/* Overlay */}
            <div className={styles.heroOverlay}></div>

            <div className={styles.heroContent}>
                {/* ✅ ONE H1 (Very Important) */}
                <h1>Pure & Healthy Groundnut Oil in Jamnagar</h1>

                <p>
                    Khodiyar Oil Mill produces 100% pure groundnut oil using traditional
                    steam heating methods. Chemical-free oil with free home delivery in
                    Jamnagar, Rajkot, Surat, and nearby areas.
                </p>

                {/* ✅ High-conversion CTA */}
                <Link href="/pure-groundnut-oil" className={styles.btn}>
                    ➔ Order Pure Groundnut Oil
                </Link>
            </div>
        </section>
    );
};

export default Hero;
