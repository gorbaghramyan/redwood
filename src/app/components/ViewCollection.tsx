import Link from "next/link";

export default function ViewCollection() {
    return (
        <div className="text-white text-center p-12 my-12 hover:shadow-lg cta relative">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="max-w-3xl mx-auto relative z-10">
                <p className="text-5xl font-extrabold mb-6 shadow-md">
                    Elevate Your Space
                </p>
                <p className="text-xl mb-8 shadow-md">
                    Discover the perfect blend of luxury and nature with our
                    exclusive redwood collections.
                </p>
                <Link href="/products">
                    <button className="mt-6 px-8 py-3 font-bold rounded-full bg-[#713e2a] text-white hover:bg-opacity-90">
                        View Our Collection
                    </button>
                </Link>
            </div>
        </div>
    );
}
