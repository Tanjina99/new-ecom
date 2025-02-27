"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/reducer/cart";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const CustomSheet = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state?.cart?.cartItem);
  console.log(cart);
  // Calculate total price
  const total =
    cart?.reduce((acc: number, item: any) => acc + item.price, 0) || 0;
  const taxRate = 0.05; // 5% tax
  const tax = total * taxRate;
  const subtotal = total + tax;

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.error("Product remove from the cart");
  };

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <ShoppingCart className="text-white w-6 h-6 cursor-pointer" />
        <span className="text-white text-sm absolute bottom-4 left-6 bg-orange-500 rounded-full p-1">
          {cart?.length}
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold">My Cart</SheetTitle>
          <SheetDescription>
            <div className="space-y-2">
              {cart?.map((item: any, index: number) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 border-b pb-2 px-4"
                >
                  <span className="text-sm font-medium w-6 text-center">
                    {index + 1}
                  </span>
                  <Image
                    src={item.thumbnail || "/next.svg"}
                    alt="Product image"
                    height={48}
                    width={48}
                    className="rounded-md"
                  />
                  <p className="text-sm font-medium flex-1 truncate">
                    {item.name}
                  </p>
                  <span className="text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                  <Plus
                    size={12}
                    color="#000000"
                    onClick={() => dispatch(increaseQuantity(item?._id))}
                  />
                  <span className="text-sm font-semibold">
                    {item?.quantity}
                  </span>
                  {item?.quantity > 1 && (
                    <Minus
                      size={12}
                      color="#000000"
                      onClick={() => dispatch(decreaseQuantity(item?._id))}
                    />
                  )}
                  <Button
                    variant="outline"
                    className="p-0"
                    onClick={() => handleRemoveFromCart(item._id)}
                  >
                    <Trash2 size={12} color="#e60f0f" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Pricing Details */}
            <div className="mt-4 p-4 border-t">
              <div className="flex justify-between text-sm font-medium">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Tax (5%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
