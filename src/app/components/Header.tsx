"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../img/logo.png";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(
        window?.location?.pathname !== "/"
    );

    useEffect(() => {
        const handleScroll = () => {
            if (window?.location?.pathname !== "/") {
                setIsScrolled(true);
                return;
            }
            if (window?.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <>
            <div
                className={`fixed inset-x-0 top-0 z-20 transition-all ease-in-out duration-500 ${
                    isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                <header className="bg-white shadow-md p-5 flex justify-between items-center">
                    <nav className="w-full">
                        <ul className="flex justify-center items-center gap-x-8">
                            <li className="px-3">
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className="px-3">
                                <Link href="/products">Our Products</Link>
                            </li>
                            <li className="px-3">
                                <Link href="/" onClick={scrollToTop}>
                                    <Image
                                        src={logo.src}
                                        alt="Logo"
                                        width={80}
                                        height={80}
                                    />
                                </Link>
                            </li>
                            <li className="px-3">
                                <Link href="/sustainability">
                                    Sustainability
                                </Link>
                            </li>
                            <li className="px-3">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>

            {/* Logo section */}
            <div
                className={`flex justify-center items-start pt-9 absolute inset-x-0 z-10 transition-all ease-in-out duration-500 ${
                    !isScrolled
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <Link href="/">
                    {/* Bigger logo when navbar is hidden */}
                    <Image src={logo.src} alt="Logo" width={180} height={180} />
                </Link>
            </div>
        </>
    );
}
