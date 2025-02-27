import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { ProductDetailsApiResponseTypes } from "@/types/products/productDetailsTypes";

export default function TrendingProducts({
  products,
}: {
  products: ProductDetailsApiResponseTypes[];
}) {
  return (
    <div className="px-4 py-14">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        <span className="text-orange-500">Trending</span> Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <Card key={product._id} className="flex flex-col">
            <CardHeader className="flex flex-col items-center">
              <Image
                src={product.thumbnail || "/next.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
            </CardHeader>

            <CardContent className="flex flex-col justify-between flex-grow">
              <CardTitle className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {product.name}
              </CardTitle>

              <CardDescription className="text-gray-500 mb-2">
                {product.slug}
              </CardDescription>
              <div className="flex justify-between items-center mt-auto">
                <p className="text-md text-gray-800">
                  <strong>Price: </strong>${product.price.toLocaleString()}
                </p>
                <div className="bg-orange-500 rounded-sm flex items-center justify-center cursor-pointer">
                  <ShoppingCart className="text-white text-xs" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
