import React from "react";

const SingleProductPage = ({ params }: any) => {
  const id = params.id;
  return <div>this is singleproduct id: {id}</div>;
};

export default SingleProductPage;
