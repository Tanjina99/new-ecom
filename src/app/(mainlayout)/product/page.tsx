import AllProducts from "@/components/products/AllProducts";

const ProductPage = async () => {
  const res = await fetch("http://localhost:5000/api/product/getProducts");
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
