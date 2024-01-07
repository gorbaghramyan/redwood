import styles from "./ProductsList.module.css";
import ProductsList from "./ProductsList";

export default function ProductsPage() {
    return (
        <section className={styles.products}>
            <div className="container mx-auto px-6">
                <h2
                    className={`${styles.title} text-4xl font-bold text-center text-gray-800 mb-8`}
                >
                    Our Products
                </h2>
                <ProductsList />
            </div>
        </section>
    );
}
