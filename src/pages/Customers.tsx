import React from "react";
import AllCustomers from "../components/tables/AllCustomers";
import DefaultLay from "../layout/DefaultLay";

const Customers = () => {
  return (
    <DefaultLay>
      <section className="p-7 overflow-y-auto">
        <h1 className="text-2xl font-semibold font-poppins">Customers</h1>
        <div className="w-full my-4">
          <AllCustomers />
        </div>
      </section>
    </DefaultLay>
  )
};

export default Customers
