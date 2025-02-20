import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function TrendingProducts({}) {
  return (
    <div className="px-4 py-14">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        <span className="text-orange-500">Trending</span> Products
      </h2>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="flex flex-col">
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src="https://www.pngarts.com/files/6/Jeans-Download-Transparent-PNG-Image.png"
                    alt="womens jeans"
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </CardHeader>

                <CardContent>
                  <CardTitle className="text-lg font-semibold text-gray-800 mb-2">
                    Apple AirPods Max Headphone
                  </CardTitle>
                  <CardDescription className="text-gray-500 mb-2">
                    Apple-AirPods-Max-Headphone--0vGgV9hf
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <p className="text-xm text-gray-800">
                      <strong>Price: </strong>${(799).toLocaleString()}
                    </p>
                    <div className="bg-orange-500 p-1 rounded-sm flex items-center justify-center cursor-pointer">
                      <ShoppingCart className="text-white text-3xl" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Carousel Navigation */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
