import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../img/logo.png";

export default function Header() {
    return (
        <div
            className={`fixed inset-x-0 top-0 z-20 transition-all ease-in-out duration-500`}
        >
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
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
                        <li className={styles.navItem}>
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
        </div>
    );
}
