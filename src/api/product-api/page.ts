export default async function Page() {
  const data = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/product/getProducts"
  );
  const products = await data.json();
  return products;
}
