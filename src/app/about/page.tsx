import Image from "next/image";
import why_choose_redwood from "../img/why_choose_redwood.png";

import Craftsmanship from "../components/Craftsmanship";

export default function About() {
    return (
        <section id="craftsmanship" className="my-[150px]">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-red-700">
                    Craftsmanship Journey
                </h2>
                <p className="text-xl text-gray-800">
                    From Majestic Redwoods to Exquisite Furniture
                </p>
            </div>

            <p className="text-lg w-3/4 mx-auto my-[10px] text-center">
                We ensure that every piece of furniture is crafted with respect
                for the environment, using sustainably sourced redwood and
                eco-friendly practices.
            </p>

            <Craftsmanship allStory />
        </section>
    );
}
