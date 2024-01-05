import Image from "next/image";
import why_choose_redwood from "../img/why_choose_redwood.png";

import craft_img_1 from "../img/crafting/1.jpg";
import craft_img_2 from "../img/crafting/2.jpg";
import craft_img_3 from "../img/crafting/3.jpg";
import craft_img_4 from "../img/crafting/4.jpg";

import tocco_table from "../img/san_francisco.jpg";
import ProductsOffered from "./ProductsOffered";
import Craftsmanship from "./Craftsmanship";

export default function About() {
    return (
        <div className="container mx-auto px-4">
            {/* About Redwood Section */}
            <section id="about-redwood" className="my-12">
                <h1 className="text-4xl font-bold text-center my-4 text-[var(--primary-color)]">
                    Redwood Furniture: A Legacy of Elegance and Durability
                </h1>

                <div className="why_choose">
                    <Image
                        src={why_choose_redwood.src}
                        alt="Table"
                        width={350}
                        height={350}
                    />
                    <div className="why_choose_wrap">
                        <h2 className="text-xl font-semibold">
                            Why Choose Redwood Furniture?
                        </h2>
                        <ul className="list-disc pl-5 text-lg">
                            <li>
                                Long-lasting and naturally resistant to the
                                elements
                            </li>
                            <li>
                                Beautiful, deep color and unique grain patterns
                            </li>
                            <li>
                                Eco-friendly and sourced from sustainable
                                forests
                            </li>
                            <li>Minimal maintenance required</li>
                        </ul>
                    </div>
                </div>

                <div className="redwood_beauty">
                    <div className="text-lg">
                        <p>
                            Redwood furniture embodies a legacy of strength and
                            beauty, offering more than just a functional piece
                            for your home — it&apos;s a connection to the
                            ancient forests and the timeless artistry of nature.
                            Each piece tells a story through its rich hues and
                            unique grain patterns, turning ordinary spaces into
                            extraordinary settings.
                        </p>
                        <p>
                            The durability of redwood ensures that this
                            furniture is not just a temporary fixture but an
                            enduring part of your home, blending timeless
                            elegance with rugged resilience. Owning a piece of
                            redwood furniture means inviting a slice of the
                            natural world into your daily life, where it stands
                            not just as a testament to the past but as a beacon
                            of timeless beauty and enduring quality.
                        </p>
                    </div>
                    <Image
                        src={tocco_table.src}
                        alt="table"
                        width={500}
                        height={500}
                    />
                </div>

                <blockquote className="blockquote-8">
                    <p>
                        The redwoods, once seen, leave a mark or create a vision
                        that stays with you always.
                        <br />
                        No one has ever successfully painted or photographed a
                        redwood tree.
                        <br />
                        The feeling they produce is not transferable.
                        <br />
                        From them comes silence and awe.
                    </p>
                    <cite>John Steinbeck</cite>
                </blockquote>
            </section>

            {/* Products Offered Section */}
            <section id="products-offered" className="my-12">
                <h2 className="text-3xl font-semibold text-red-700">
                    Products Offered
                </h2>

                <ProductsOffered />
            </section>

            {/* Craftsmanship Section */}
            <section id="craftsmanship" className="my-12">
                <h2 className="text-3xl font-semibold text-center text-red-800">
                    Craftsmanship Journey
                </h2>
                <h3 className="text-xl font-semibold text-center text-red-700">
                    From Majestic Redwoods to Exquisite Furniture
                </h3>

                <Craftsmanship />
            </section>

            {/* Call to Action Section */}
            <section
                id="cta"
                className="bg-red-600 text-white text-center p-12 my-12 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
                <p className="text-4xl font-bold mb-4">Elevate Your Space</p>
                <p className="text-xl">
                    Discover the perfect blend of luxury and nature with our
                    exclusive redwood collections.
                </p>
                <button className="mt-6 px-8 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-red-700 hover:text-white">
                    View Our Collection
                </button>
            </section>
        </div>
    );
}
