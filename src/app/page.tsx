import Head from "next/head";
import Intro from "./components/Intro";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero";
import CraftsmanshipIntro from "./components/CraftsmanshipIntro";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import ViewCollection from "./components/ViewCollection";
import RedwoodBeauty from "./components/RedwoodBeauty/RedwoodBeauty";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Welcome to Tocco Furniture | Timeless Redwood Furniture
                </title>
                <meta
                    name="description"
                    content="Handcrafted redwood furniture in California, combining timeless craftsmanship with sustainability to elevate your home decor."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Hero />

                <Intro />

                <ProductCarousel />

                <WhyChoose />

                <RedwoodBeauty />

                <ViewCollection />

                <CraftsmanshipIntro />

                <Contact />
            </main>
        </>
    );
}
