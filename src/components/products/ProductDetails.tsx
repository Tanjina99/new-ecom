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
import { toast } from "sonner";

function ProductDetails({ product }: any) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cart?.cartItem);
  console.log(cart);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    toast.success("Added to cart successfully");
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.error("Removed from cart successfully");
  };

  return (
    <>
      <Card className="w-1/2 mx-auto mt-10">
        <CardHeader className="mt-4">
          <Image
            src={product?.thumbnail || "/next.svg"}
            alt="Product Photo"
            height={384}
            width={360}
            className="mx-auto"
          />
          <CardTitle>{product?.name}</CardTitle>
          <CardDescription>
            Discount : {product?.discount?.value}%
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Price : {product?.price}</p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => {
              cart.find((item: any) => item._id === product._id)
                ? handleRemoveFromCart(product?._id)
                : handleAddToCart(product);
            }}
          >
            {cart.find((item: any) => item._id === product._id)
              ? "Remove from cart"
              : "Add to cart"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductDetails;
