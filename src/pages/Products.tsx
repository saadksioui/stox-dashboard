import React from "react";
import AllProducts from "../components/tables/AllProducts";
import DefaultLay from "../layout/DefaultLay";

const Products = () => {
  return (
    <DefaultLay>
      <section className="p-7 overflow-y-auto">
        <h1 className="text-2xl font-semibold font-poppins">Products</h1>
        <div className="w-full my-4">
          <AllProducts />
        </div>
      </section>
    </DefaultLay>
  )
};

export default Products
