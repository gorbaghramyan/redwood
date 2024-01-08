"use client";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../utils/consts";

export default function ProductsList() {
    return (
        <div className="flex flex-wrap">
            {products.map(product => (
                <div
                    key={product.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                >
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <Link href={`/products/${product.id}`}>
                            <Image
                                src={product.imageUrl}
                                alt={product.name}
                                width={500}
                                height={300}
                                className="rounded-t-lg"
                            />
                        </Link>
                        <div className="py-6 px-8 rounded-lg">
                            <Link href={`/products/${product.id}`}>
                                <h3 className="text-2xl text-gray-700 font-bold mb-3">
                                    {product.name}
                                </h3>
                            </Link>
                            <p className="text-gray-600 mb-4">
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-xl text-gray-600">
                                    {product.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
