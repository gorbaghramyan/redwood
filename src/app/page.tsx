import Head from "next/head";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Sustainability from "./components/Sustainability";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Welcome to Tocco Furniture | Timeless Redwood Furniture
                </title>
                <meta
                    name="description"
                    content="Handcrafted redwood furniture by Greg Tocco, combining timeless craftsmanship with sustainability to elevate your home decor."
                />
                <link rel="icon" href="/favicon.ico" />
                {/* Add other relevant meta tags */}
            </Head>
            <main>
                <Hero />
                <About />
                <Sustainability />
                <Contact />
            </main>
        </>
    );
}
