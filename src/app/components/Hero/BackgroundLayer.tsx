import Image from "next/image";
import hero_back from "../../img/layer-1.webp";
import styles from "./Hero.module.css";

const BackgroundLayer = () => {
    return (
        <div className={`${styles.layers__item} ${styles.layer1}`}>
            <Image
                src={hero_back.src}
                alt="Foggy redwood forest"
                layout="fill"
                objectFit="cover"
            />
        </div>
    );
};
export default BackgroundLayer;