import Link from "next/link";
import styles from "./Hero.module.css";
import bg from "@/app/img/heroBack.webp"

export default function Hero() {
    return (
        <section style={{ backgroundImage: "url(" + bg.src + ")" }} className={`w-1/2 h-screen bg-no-repeat bg-cover bg-center ${styles.heroContent}`}>
            <h1>Redwood Furniture</h1>

            <Link href="/products">
                <button className={styles.explore}>
                    Explore Collection
                </button>
            </Link>
        </section>
    );
}
