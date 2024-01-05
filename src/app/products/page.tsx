import ProductsList from "./ProductsList";

export default function ProductsPage() {
    return (
            <section className="bg-gray-100 py-8 products">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Our Products
                    </h2>
                    <ProductsList />
                </div>
            </section>
    );
}
