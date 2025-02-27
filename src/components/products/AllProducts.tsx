"use client";
import ProdcutCard from "./ProdcutCard";

function AllProducts({ products }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 my-10">
      <h2 className="text-4xl font-bold text-center text-black mb-8">
        All Our Products
      </h2>
      <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {products?.map((product: any, index: number) => (
          <ProdcutCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
