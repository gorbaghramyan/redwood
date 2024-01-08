"use client";

import styles from './ProductPage.module.css';
import Image from "next/image";
import { useState } from "react";
import { products } from "@/utils/consts";

export default function ProductPage({ params }: { params: { id: string } }) {
    const [width, setWidth] = useState(1);
    const [length, setLength] = useState(1);

    const product = products.find(p => p.id === +params.id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const price = width && length ? calculatePrice(width, length) : 0;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={product.imageUrl}
                    alt="Custom Redwood Furniture"
                    width={500}
                    height={300}
                    className="rounded-lg"
                />
            </div>
            <div className={styles.detailsContainer}>
                <h2 className={styles.detailsTitle}>
                    {product.name}
                </h2>
                <p className={styles.detailsDescription}>
                    {product.description}
                </p>
                <p className={styles.customizationPrompt}>
                    Customize your redwood furniture to fit your space perfectly.
                </p>
                <label
                    htmlFor="width"
                    className={styles.inputLabel}
                >
                    Width (m):
                </label>
                <input
                    type="number"
                    id="width"
                    value={width}
                    onChange={e => setWidth(Number(e.target.value))}
                    className={styles.inputField}
                    placeholder="Enter width"
                />

                <label
                    htmlFor="length"
                    className={styles.inputLabel}
                >
                    Length (m):
                </label>
                <input
                    type="number"
                    id="length"
                    value={length}
                    onChange={e => setLength(Number(e.target.value))}
                    className={styles.inputField}
                    placeholder="Enter length"
                />

                <div className={styles.priceContainer}>
                    <span className={styles.priceLabel}>Price:</span>
                    <span className={styles.priceValue}>${price}</span>
                </div>
            </div>
        </div>
    );
}

function calculatePrice(width: number, length: number) {
    // ... calculation logic
    return width * length * 50; // Adjust the multiplier as per your pricing
}
