import Link from "next/link";

export default function Intro() {
    return (
        <div className="mx-auto px-4 my-12">
            <h1 className="text-4xl font-bold text-center my-4 text-[var(--primary-color)]">
                Redwood Furniture: A Legacy of Elegance and Durability
            </h1>

            <p className="text-lg w-3/4 mx-auto my-[25px] text-center">
                Discover the finest selection of Redwood Furniture, crafted for
                longevity. <Link href="/products">Browse</Link> our full range
                of hand-selected pieces, embodying a legacy of elegance and
                unmatched durability. From timeless classics to contemporary
                designs, find the perfect addition to your space. Delve into our
                world of exquisite Redwood craftsmanship - Your journey to
                extraordinary living starts here.
            </p>
        </div>
    );
}
