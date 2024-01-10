import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Redwood Furniture",
    description: "Redwood Furniture: A Legacy of Elegance and Durability",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <Header />
                <div className="flex-grow">{children}</div>
                <BackToTopButton />
                <Footer />
            </body>
        </html>
    );
}
