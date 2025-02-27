"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/reducer/cart";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

function ProductDetails({ product }: any) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cart?.cartItem);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Added to cart succesfully");
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.error("Product remove from the cart");
  };

  return (
    <div className="py-10">
      <CardTitle className="text-2xl font-semibold text-gray-900 text-center">
        {product?.name}
      </CardTitle>
      <Card className="w-1/3 mx-auto mt-10 shadow-xl border border-gray-200 rounded-lg overflow-hidden">
        <CardHeader className="relative">
          <Image
            src={product?.thumbnail || "/next.svg"}
            alt="Product Photo"
            height={384}
            width={360}
            className="mx-auto rounded-md object-cover"
          />
          {product?.discount?.value && (
            <div className="absolute top-2 left-2 bg-black text-white px-3 py-1 rounded-full text-sm">
              {product?.discount?.value}% OFF
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-2">
          <CardDescription className="text-gray-500 text-lg">
            {product?.slug || "No description available."}
          </CardDescription>
          <p
            className={`text-sm font-medium ${
              product?.stock > 0 ? "text-black" : "text-red-500"
            }`}
          >
            {product?.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center py-4">
          <p className="font-bold text-xl text-black">
            Price: ${product?.price}
          </p>
          <Button
            onClick={() => {
              cart.find((item: any) => item._id === product._id)
                ? handleRemoveFromCart(product?._id)
                : handleAddToCart(product);
            }}
            disabled={product?.stock <= 0} // Disable when stock is 0
            className={`flex items-center bg-orange-500 hover:bg-orange-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 ${
              product?.stock <= 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ShoppingCart className="mr-2" />
            {cart.find((item: any) => item._id === product._id)
              ? "Remove from cart"
              : "Add to cart"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductDetails;
