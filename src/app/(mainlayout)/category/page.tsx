import Category from "@/components/category/Category";

const CategoryPage = async () => {
  const res = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/category/getcategory"
  );
  const data = await res.json();
  const category = data?.categories;
  console.log(data);

  return (
    <>
      <Category categories={category} />
    </>
  );
};

export default CategoryPage;
