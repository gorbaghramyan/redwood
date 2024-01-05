import Image from "next/image";
import craft_img_2 from "../img/crafting/2.jpg";
import craft_img_3 from "../img/crafting/3.jpg";

const Craftsmanship = () => {
    const steps = [
        {
            title: "Selecting and Milling the Redwood",
            description:
                "Our journey begins in the heart of the forest, where we select the finest redwood trees, chosen for their perfect blend of strength and beauty. Each tree is handpicked, ensuring it's ripe for transformation into a masterpiece.\n\n" +
                "With precision and care, we mill the chosen redwoods, unveiling the hidden charm of the wood. This step is crucial as it shapes the foundation of our furniture, each plank reflecting the essence of nature.",
            image: craft_img_2.src,
            alt: "Redwood planks being dried and prepared for crafting.",
            imageWidth: "1/2", // Increased width for the first image
            textWidth: "1/2"
        },
        {
            title: "The Crafting Process to The Artisan’s Pride",
            description:
                "Our artisans bring the wood to life, crafting each piece with a blend of traditional techniques and modern finesse. It’s a meticulous process where every chisel and stroke counts. The final step reveals a timeless piece of furniture, ready to adorn your space. From the embrace of nature to the comfort of your home, our furniture is not just built, it's grown.\n\n" +
                "Meet the hands behind the craft. Our dedicated artisans, stewards of woodworking, ensure that the spirit of the forest lives on in every creation.",
            image: craft_img_3.src,
            alt: "Handcrafted redwood furniture showcasing the natural beauty of the wood.",
            imageWidth: "1/2", // Keeping the second image at the original width
            textWidth: "1/2"
        },
    ];

    return (
        <section className="container mx-auto p-4 max-w-7xl">
            {steps.map((step, index) => (
                <article
                    key={index}
                    className="flex flex-col md:flex-row items-center mb-8"
                >
                    <div>
                        <Image
                            src={step.image}
                            alt={step.alt}
                            width={step.imageWidth === "1/2" ? 600 : 400} // Adjusted width based on the imageWidth prop
                            height={300}
                            layout="responsive"
                        />
                    </div>
                    <div className={`md:w-${step.textWidth} mt-6 md:mt-0 md:ml-10`}>
                        <h3 className="text-xl font-bold text-red-700">
                            {step.title}
                        </h3>
                        <p className="mt-2 text-gray-600 whitespace-pre-line">{step.description}</p>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default Craftsmanship;
