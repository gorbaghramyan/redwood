"use client";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/app/utils/consts";

export default function ProductPage({ params }: { params: { id: string } }) {
    const [width, setWidth] = useState(1);
    const [length, setLength] = useState(1);

    const product = products.find(p => p.id === +params.id);

    if (!product) {
        return <div>Product not found</div>;
    }

    const price = width && length ? calculatePrice(width, length) : 0;

    return (
        <div className="container mx-auto px-4 py-8 flex flex-wrap mt-[120px]">
            <div className="w-full md:w-1/2 block mx-auto">
                <Image
                    src={product.imageUrl}
                    alt="Custom Redwood Furniture"
                    width={500}
                    height={300}
                    className="rounded-lg mx-auto"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col p-4">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        {product.name}
                    </h2>
                    <p className="mt-2 text-gray-600">{product.description}</p>
                    <p className="mt-4 text-gray-500">
                        Customize your redwood furniture to fit your space
                        perfectly.
                    </p>
                </div>
                <div>
                    <label
                        htmlFor="width"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Width (m):
                    </label>
                    <input
                        type="number"
                        id="width"
                        value={width}
                        onChange={e => setWidth(Number(e.target.value))}
                        className="mt-1 border border-gray-300 shadow-sm p-2 block w-full rounded-md"
                        placeholder="Enter width"
                    />

                    <label
                        htmlFor="length"
                        className="block text-sm font-medium text-gray-700 mt-4"
                    >
                        Length (m):
                    </label>
                    <input
                        type="number"
                        id="length"
                        value={length}
                        onChange={e => setLength(Number(e.target.value))}
                        className="mt-1 border border-gray-300 shadow-sm p-2 block w-full rounded-md"
                        placeholder="Enter length"
                    />

                    <div className="mt-6">
                        <span className="text-xl font-semibold">Price:</span>
                        <span className="text-xl">${price}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function calculatePrice(width: number, length: number) {
    // ... calculation logic
    return width * length * 50;
}
