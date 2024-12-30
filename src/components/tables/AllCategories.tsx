import React from "react";
import { Category } from "../../types";
import axios from "axios";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";

const AllCategories = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/models/categories.json");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="w-full flex flex-col my-10 bg-white border border-gray-300">

      <div className="w-[98%] mx-auto overflow-y-auto">
        <table className="w-full">
          <thead className="text-sm text-gray-700 border-b font-poppins">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">Category ID</th>
              <th scope="col" className="px-6 py-3 text-left">Name</th>
              <th scope="col" className="px-6 py-3 text-left">Description</th>
              <th scope="col" className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              categories.map((category, index) => (
                <tr key={index} className="bg-white border-b font-poppins">
                  <td className="px-6 py-4">{category.CategoryID}</td>
                  <td className="px-6 py-4">{category.Name}</td>
                  <td className="px-6 py-4">{category.Description}</td>

                  <td className="px-6 py-4 flex items-center gap-3 pb-5">
                    <Edit size={20} />
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

export default AllCategories
