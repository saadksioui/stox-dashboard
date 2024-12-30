import React from "react";
import { CustomerTypes } from "../../types";
import axios from "axios";
import { BadgeCheck, BadgeX, Eye, Pen, Trash } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


const AllCustomers = () => {

  const [customers, setCustomers] = useState<CustomerTypes[]>([]);
  const [allCustomers, setAllCustomers] = useState<CustomerTypes[]>([]);
  const [statusChosen, setStatusChosen] = useState("");


  const fetchCustomers = async () => {
    try {
      const response = await axios.get("/models/customers.json");
      setCustomers(response.data);
      setAllCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setStatusChosen(event.target.value);
    };

    const handleSearchCustomer = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const status = statusChosen.toLowerCase();

      if (status === "all") {
        setCustomers(allCustomers);
      } else if (status === "verified") {
        const filteredCustomers = allCustomers.filter((customer) => customer.Verified);
        setCustomers(filteredCustomers);
      } else if (status === "unverified") {
        const filteredCustomers = allCustomers.filter((customer) => !customer.Verified);
        setCustomers(filteredCustomers);
      }
    };


  return (
    <div className="w-full flex flex-col my-10 bg-white border border-gray-300">
      <div className="w-full flex justify-end p-4 border-b border-gray-300">
        <form onSubmit={handleSearchCustomer} className="w-full flex items-center gap-3">
          <select name="status" className="p-2 font-epilogue border border-gray-500 rounded-md" value={statusChosen} onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="verified">Verified</option>
            <option value="unverified">Unverified</option>
          </select>
          <input type="submit" value="Apply" className="py-2 px-3 font-poppins font-medium bg-primary-500 text-white rounded-md"/>
        </form>
      </div>
      <div className="w-[98%] mx-auto overflow-y-auto">
        <table className="w-full">
          <thead className="text-sm text-gray-700 border-b font-poppins">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">ID</th>
              <th scope="col" className="px-6 py-3 text-left">Name</th>
              <th scope="col" className="px-6 py-3 text-left">Email</th>
              <th scope="col" className="px-6 py-3 text-left">Mobile</th>
              <th scope="col" className="px-6 py-3 text-left">Sales</th>
              <th scope="col" className="px-6 py-3 text-left">Earning</th>
              <th scope="col" className="px-6 py-3 text-left">Verified</th>
              <th scope="col" className="px-6 py-3 text-left">Joined Date</th>
              <th scope="col" className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer, index) => (
                <tr key={index} className="bg-white borde r-b font-poppins">
                  <td className="px-6 py-4">{customer.ID}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img src={customer.Image} alt="customer-image" width={200} height={200} className="size-10 rounded-md shadow"/>
                    <span>{customer.Name}</span>
                  </td>
                  <td className="px-6 py-4">{customer.Email}</td>
                  <td className="px-6 py-4">{customer.Mobile}</td>
                  <td className="px-6 py-4">{customer.Sales}</td>
                  <td className="px-6 py-4">${customer.Earning}</td>
                  <td className="px-6 py-4 text-center">
                    {
                      customer.Verified ? <BadgeCheck color="green"/> : <BadgeX color="red"/>
                    }
                  </td>
                  <td className="px-6 py-4">{customer.JoinedDate}</td>
                  <td className="px-6 py-4 flex items-center gap-3 pb-5">
                    <Pen size={20} />
                    <Eye size={20}/>
                    <Trash color="red" size={20}/>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default AllCustomers
