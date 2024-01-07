import Craftsmanship from "./Craftsmanship";
import ProductsOffered from "./ProductsOffered";
import WhyChoose from "./WhyChoose";
import ViewCollection from "./ViewCollection";
import RedwoodBeauty from "./RedwoodBeauty";
import Blockquote from "./Blockquote/Blockquote";
import Link from "next/link";

export default function About() {
    return (
        <div className="container mx-auto px-4">
            <section className="my-12">
                <h1 className="text-4xl font-bold text-center my-4 text-[var(--primary-color)]">
                    Redwood Furniture: A Legacy of Elegance and Durability
                </h1>

                <p className="text-lg w-3/4 mx-auto my-[25px]">
                    Discover the finest selection of Redwood Furniture, crafted
                    for longevity. <Link href="/products">Browse</Link> our full
                    range of hand-selected pieces, embodying a legacy of
                    elegance and unmatched durability. From timeless classics to
                    contemporary designs, find the perfect addition to your
                    space. Delve into our world of exquisite Redwood
                    craftsmanship - Your journey to extraordinary living starts
                    here.
                </p>

                <ProductsOffered />

                <WhyChoose />

                <ViewCollection />

                <RedwoodBeauty />
            </section>

            {/* Craftsmanship Section */}
            <section>
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-red-700">
                        Craftsmanship Journey
                    </h2>
                    <p className="text-xl text-gray-800">
                        From Majestic Redwoods to Exquisite Furniture
                    </p>
                </div>

                <Blockquote />

                <p className="text-lg w-2/3 mx-auto my-[10px] text-center">
                    We ensure that every piece of furniture is crafted with
                    respect for the environment, using sustainably sourced
                    redwood and eco-friendly practices.
                </p>

                <Craftsmanship />
            </section>
        </div>
    );
}
