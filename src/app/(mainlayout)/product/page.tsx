import AllProducts from "@/components/products/AllProducts";

const ProductPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/getProducts`
  );
  const data = await res.json();
  const products = data?.products;
  console.log(products);

  return (
    <>
      <AllProducts products={products} />
    </>
  );
};

export default ProductPage;
