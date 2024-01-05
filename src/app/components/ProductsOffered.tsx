"use client";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import { SimpleLeftArrow, SimpleRightArrow } from "../utils/icons";
import { products } from "../utils/consts";

const ProductsOffered = () => {
    useEffect(() => {
        new Glide(".glide", {
            type: "carousel",
            startAt: 0,
            perView: 3,
            gap: 32,
            breakpoints: {
                1280: { perView: 2 },
                768: { perView: 1 },
            },
        }).mount();
    }, []);

    return (
        <div className="glide xl:w-[54rem] m-3 lg:w-[42rem] md:w-[30rem] sm:w-[18rem] px-16 py-8 bg-gray-300 bg-opacity-60 rounded-3xl">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {products.map((product, i) => (
                        <li key={i} className="glide__slide">
                            <div className="border p-4 shadow-lg">
                                <Image
                                    src={product.imageUrl}
                                    className="slide_img"
                                    alt="Redwood Table"
                                    width={500}
                                    height={300}
                                />
                                <h3 className="text-xl font-semibold mt-2">
                                    {product.name}
                                </h3>
                                <h3 className="text-xl font-semibold mt-2">
                                    {product.price}
                                </h3>
                                <p className="mt-1">{product.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button
                    data-glide-dir="<"
                    className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                >
                    <SimpleLeftArrow />
                </button>
                <button
                    data-glide-dir=">"
                    className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                >
                    <SimpleRightArrow />
                </button>
            </div>
        </div>
    );
};

export default ProductsOffered;
