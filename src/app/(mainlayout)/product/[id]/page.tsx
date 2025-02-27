import ProductDetails from "@/components/products/ProductDetails";
import { ProductDetailsApiResponseTypes } from "@/types/products/productDetailsTypes";
import React from "react";

const SingleProductPage = async ({ params }: any) => {
  const id = params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`);
  const data = await res.json();
  const product: ProductDetailsApiResponseTypes = data?.product;
  console.log("Data :", data);

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default SingleProductPage;
