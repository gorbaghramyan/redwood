import Head from "next/head";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";

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
                <About />
                <Contact />
            </main>
        </>
    );
}
