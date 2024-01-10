"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import MenuButton from "../MenuButton";
import logo from "../../img/logo.png";

import styles from "./Header.module.css";

export default function Header() {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

    useEffect(() => {
        if (isMenuOpened) {
            setIsMenuOpened(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <header
            className={`${styles.header} fixed inset-x-0 top-0 z-20 transition-all ease-in-out`}
        >
            <nav className={styles.nav}>
                <div className={styles.mobileWrap}>
                    <Link href="/">
                        <Image
                            src={logo.src}
                            alt="Logo"
                            width={80}
                            height={80}
                            className={styles.brandLogo}
                        />
                    </Link>
                    <MenuButton
                        onClick={toggleMenu}
                        isMenuOpened={isMenuOpened}
                    />
                </div>
                <ul
                    className={`${styles.navList} ${
                        isMenuOpened ? styles.navListActive : ""
                    }`}
                >
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/products">
                            Products
                        </Link>
                    </li>
                    <li id={styles.navItemLogo} className={styles.navItem}>
                        <Link className={styles.navLink} href="/">
                            <Image
                                src={logo.src}
                                alt="Logo"
                                width={80}
                                height={80}
                                className={styles.logoImage}
                            />
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/about">
                            About Us
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link className={styles.navLink} href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
