"use client";
import Image from "next/image";

import hero_back from "../img/layer-1.webp"
import layer6 from "../img/layer-6.png"

import useParallaxEffect from "../hooks/useParallaxEffect";

export default function Hero() {
    useParallaxEffect();

    return (
        <section className="hero">
            <div className="layers">
                <div className="layers__container">
                    <div className="layers__item layer-1">
                        <Image
                            src={hero_back.src}
                            alt="Layer 1"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="layers__item layer-3">
                        <div className="hero-content">
                            <h1>Redwood Furniture</h1>
                            <p className="hero-content__p">
                                <span>Blending secrets of craftsmanship with the</span>
                                <span>enduring beauty of redwood to create</span>
                                <span>furniture that lasts a lifetime.</span>
                            </p>
                            <button className="button-start">Make Order</button>
                        </div>
                    </div>
                    <div className="layers__item layer-6">
                        <Image
                            src={layer6.src}
                            alt="Layer 6"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
