import styles from "./Hero.module.css";
import Link from "next/link";
import Wave from "../Wave";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Redwood Furniture</h1>
                <p>
                    We ensure that every piece of furniture is crafted with respect for the environment, using sustainably sourced redwood and eco-friendly practices.
                </p>
                <button className={styles.buttonStart}>
                    <Link href="/products">Explore Collection</Link>
                </button>
            </div>

            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    bottom: "0",
                }}
            >
                <Wave />
            </div>
        </section>
    );
}
