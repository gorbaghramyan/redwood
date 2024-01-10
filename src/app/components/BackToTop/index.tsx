"use client";
import { useEffect, useState } from "react";
import styles from './styles.module.css';

const BackToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollFunction = () => {
        setShowButton(window.scrollY > 20);
    };

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={backToTop}
            className={`fixed bottom-5 right-5 rounded-full p-3 text-xs font-medium uppercase leading-tight shadow-md transition-all duration-200 ease-in-out ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${styles.backToTopButton}`}
            id="btn-back-to-top"
            aria-label="Back to top"
        >
            <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                className="w-4 h-4 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
            >
                <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"/>
            </svg>
        </button>
    );
};

export default BackToTopButton;