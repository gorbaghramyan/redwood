import styles from "./Hero.module.css";
import Image from "next/image";
import layer6 from "../../img/layer-6.png";
import BackgroundLayer from "./BackgroundLayer";
import Link from "next/link";
// import Wave from "../Wave";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.layers}>
                <div className={styles.layers__container}>
                    <BackgroundLayer />

                    <div className={`${styles.layers__item} ${styles.layer3}`}>
                        <div className={styles.heroContent}>
                            <h1>Redwood Furniture</h1>
                            <p className={styles.heroContent__p}>
                                Furniture that lasts a lifetime and beyond
                            </p>
                            <button className={styles.buttonStart}>
                                <Link href="/products">Explore Collection</Link>
                            </button>
                        </div>
                    </div>
                    <div className={`${styles.layers__item} ${styles.layer6}`}>
                        <Image
                            src={layer6.src}
                            alt="Foggy redwood forest"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
            {/* <Wave /> */}
        </section>
    );
}
