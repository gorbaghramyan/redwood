"use client";
import styles from './Hero.module.css';
import Image from "next/image";
import hero_back from "../../img/layer-1.webp";
import layer6 from "../../img/layer-6.png";
import useParallaxEffect from '@/app/hooks/useParallaxEffect';

export default function Hero() {
    useParallaxEffect();

    return (
        <section className={styles.hero}>
            <div className={styles.layers}>
                <div className={styles.layers__container}>
                    <div className={`${styles.layers__item} ${styles.layer1}`}>
                        <Image
                            src={hero_back.src}
                            alt="Redwood forest"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={`${styles.layers__item} ${styles.layer3}`}>
                        <div className={styles.heroContent}>
                            <h1>Redwood Furniture</h1>
                            <p className={styles.heroContent__p}>
                                Furniture that lasts a lifetime
                            </p>
                            <button className={styles.buttonStart}>Explore Collection</button>
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
        </section>
    );
}
