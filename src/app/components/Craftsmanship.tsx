import Image from "next/image";
import { craft_steps, craft_steps_short } from "../utils/consts";

interface IProps {
    allStory?: boolean;
}

const Craftsmanship: React.FC<IProps> = ({ allStory }) => {
    const steps = allStory ? craft_steps : craft_steps_short;
    
    return (
        <section className="container mx-auto px-4 pt-8 max-w-7xl">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={`flex flex-col  ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-4 md:gap-8 mb-10 md:mb-20`}
                >
                    <div className="flex-1">
                        <Image
                            src={step.image}
                            alt={step.alt}
                            width={500}
                            height={400}
                            layout="responsive"
                            objectFit="contain"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex-1 flex items-center">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-red-700 mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-700 whitespace-pre-line">
                                {step.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Craftsmanship;
