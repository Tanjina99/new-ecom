export default async function categoryApi() {
  const data = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/category/getcategory"
  );
  const category = await data.json();
  return category;
}
