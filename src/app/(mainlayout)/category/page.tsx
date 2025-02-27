import Category from "@/components/category/Category";

const CategoryPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/category/getcategory`
  );
  const data = await res.json();
  const category = data?.categories;
  console.log(category);

  return (
    <>
      <Category categories={category} />
    </>
  );
};

export default CategoryPage;
