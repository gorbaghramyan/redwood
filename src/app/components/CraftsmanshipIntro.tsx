import Blockquote from "./Blockquote/Blockquote";
import Craftsmanship from "./Craftsmanship";

export default function CraftsmanshipIntro() {
    return (
        <section>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-red-700">
                    Craftsmanship Journey
                </h2>
                <p className="text-xl text-gray-800">
                    From Majestic Redwoods to Exquisite Furniture
                </p>
            </div>

            <p className="text-lg w-2/3 mx-auto my-[10px] text-center mt-6">
                We ensure that every piece of furniture is crafted with respect
                for the environment, using sustainably sourced redwood and
                eco-friendly practices.
            </p>

            <Craftsmanship />
        </section>
    );
}
