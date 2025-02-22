import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ProductPage = async () => {
  const res = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
  );
  const data = await res.json();
  const products = data?.products; //it's working, swagger is not working in usa, it will work with mobile data
  console.log(products);

  return (
    <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 my-20">
      {products?.map((product: any, index: number) => (
        <Link href={`/product/${product?._id}`} key={index}>
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
      ))}
    </div>
  );
};

export default ProductPage;
