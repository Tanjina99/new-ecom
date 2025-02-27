import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function ProductCard({ product }: any) {
  return (
    <div className="text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link href={`/product/${product?._id}`} className="block">
            <div className="rounded-lg shadow-lg overflow-hidden p-4 sm:p-6 h-[400px] w-[280px] flex flex-col justify-between">
              <div className="w-full h-48">
                <Image
                  src={product?.thumbnail || "/next.svg"}
                  alt="Product Photo"
                  height={192}
                  width={280}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text- font-semibold text-center">
                {product?.name}
              </h3>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-between w-full mt-1 text-sm text-gray-300">
                  <p className="text-black">
                    Discount:{" "}
                    <span className="font-semibold">
                      {product?.discount?.value}%
                    </span>
                  </p>
                  <p className="text-black">
                    Price:{" "}
                    <span className="font-semibold">${product?.price}</span>
                  </p>
                </div>
              </div>
              <Button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 w-fit">
                View Details
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
