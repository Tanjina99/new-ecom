"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";

function SheetComponent() {
  const cart = useSelector((state: any) => state?.cart?.cartItem);

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <ShoppingCart className="text-white w-6 h-6 cursor-pointer" />
        <span className="text-white text-sm absolute bottom-4 left-6 bg-indigo-500 rounded-full p-1">
          {cart?.length}
        </span>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {cart?.map((item: any, index: number) => (
              <div key={item._id} className="flex justify-between items-center">
                <span>{index + 1}</span>
                <Image
                  src={item.thumbnail || "/next.svg"}
                  alt="Product Photo"
                  height={64}
                  width={64}
                  className="mx-auto"
                />
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent;
