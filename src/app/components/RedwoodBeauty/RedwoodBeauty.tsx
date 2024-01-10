import Image from "next/image";
import tocco_table from "../../img/san_francisco.webp";
import styles from "./RedwoodBeauty.module.css";

export default function RedwoodBeauty() {
    return (
        <div className={styles.redwood_beauty}>
            <div className={styles.textContainer}>
                <h2 className="text-3xl font-semibold text-center">
                    The Essence of Redwood: Elegance Meets Endurance
                </h2>
                <p>
                    Redwood furniture embodies a legacy of strength and beauty,
                    offering more than just a functional piece for your home —
                    it&apos;s a connection to the ancient forests and the
                    timeless artistry of nature. Each piece tells a story
                    through its rich hues and unique grain patterns, turning
                    ordinary spaces into extraordinary settings.
                </p>
                <p>
                    The durability of redwood ensures that this furniture is not
                    just a temporary fixture but an enduring part of your home,
                    blending timeless elegance with rugged resilience. Owning a
                    piece of redwood furniture means inviting a slice of the
                    natural world into your daily life, where it stands not just
                    as a testament to the past but as a beacon of timeless
                    beauty and enduring quality.
                </p>
            </div>
            <Image src={tocco_table.src} alt="table" width={500} height={500} />
        </div>
    );
}
