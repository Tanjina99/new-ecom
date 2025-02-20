// import React from "react";

// const GetProductPage = async () => {
//   const response = await fetch(
//     "https://staging-be-ecom.techserve4u.com/api/product/getProducts",
//     { cache: "no-store" }
//   );

//   const data = await response.json();
//   console.log(data);
//   return <div>get product page</div>;
// };

// export default GetProductPage;

export default async function ServerComponentFetch() {
  const res = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/product/getProducts",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div>
      <h1>Server Component Data Fetching</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
