
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";
  import Link from "next/link";

function ProdcutCard({product}: any) {
  return (
    <Link href={`/product/${product?._id}`}>
          <Card className="w-full h-80 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <CardHeader className="mt-4">
              <Image
                src={product?.thumbnail || "/next.svg"}
                alt="Product Photo"
                height={384}
                width={360}
                className="h-40 w-60 mx-auto"
              />
              <CardTitle>{product?.name}</CardTitle>
              <CardDescription>
                Discount : {product?.discount?.value}%
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Price : {product?.price}</p>
            </CardContent>
          </Card>
        </Link>
  )
}

export default ProdcutCard