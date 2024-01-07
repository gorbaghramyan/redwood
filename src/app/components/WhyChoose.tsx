import Image from "next/image";

import why_choose_redwood from "../img/why_choose_redwood.png";

export default function WhyChoose() {
    return (
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
                        Long-lasting and naturally resistant to the elements
                    </li>
                    <li>Beautiful, deep color and unique grain patterns</li>
                    <li>Eco-friendly and sourced from sustainable forests</li>
                    <li>Minimal maintenance required</li>
                </ul>
            </div>
        </div>
    );
}
