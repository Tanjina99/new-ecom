import AllProducts from "@/components/products/AllProducts";

const ProductPage = async () => {
  const res = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
  );
  const data = await res.json();
  const products = data?.products; //it's working, swagger is not working in usa, it will work with mobile data
  console.log(products);

  return (
    <>
    <AllProducts products={products}/>
    </>
  );
};

export default ProductPage;
