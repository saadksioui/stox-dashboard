import React from "react";
import { Product } from "../../types";
import axios from "axios";
import { Eye, Pen, Trash } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";

const AllProducts = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products function
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/models/products.json");
      setProducts(response.data);
      setAllProducts(response.data); // Store original list
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };


  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchTerm) {
      const filteredProducts = allProducts.filter((product) =>
        product.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  };

  return (
    <div className="w-full flex flex-col my-10 bg-white border border-gray-300">
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-between p-4 border-b border-gray-300">
          <form onSubmit={handleSearchProduct} className="w-full md:w-[50%] lg:w-[25%] flex items-center gap-3 bg-white border border-gray-400 rounded-md p-2">
            <Search />
            <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search" className="outline-none bg-white font-poppins w-full"/>
          </form>
          <a href={'/'} className="flex items-center gap-2 bg-primary-500 text-white font-poppins font-medium p-2 rounded-md">
            <Plus />
            <span>New Product</span>
          </a>
        </div>
      <div className="w-[98%] mx-auto overflow-y-auto">
      <table className="w-full">
        <thead className="text-sm text-gray-700 border-b font-poppins">
          <tr>
            <th scope="col" className="px-6 py-3 text-left">ID</th>
            <th scope="col" className="px-6 py-3 text-left">Name</th>
            <th scope="col" className="px-6 py-3 text-left">Category</th>
            <th scope="col" className="px-6 py-3 text-left">Price</th>
            <th scope="col" className="px-6 py-3 text-left">Ratings</th>
            <th scope="col" className="px-6 py-3 text-left">Orders</th>
            <th scope="col" className="px-6 py-3 text-left">Stock</th>
            <th scope="col" className="px-6 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => (
              <tr key={index} className="bg-white border-b font-poppins">
                <td className="px-6 py-4">{product.ID}</td>
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={product.Image} alt="" width={100} height={100} className="size-10 bg-white shadow p-1 rounded-lg object-contain" />
                  <span className="text-sm font-semibold">{product.Name}</span>
                </td>
                <td className="px-6 py-4">{product.Category}</td>
                <td className="px-6 py-4">{product.Price}</td>
                <td className="px-6 py-4">{product.Ratings}</td>
                <td className="px-6 py-4">{product.Orders}</td>
                <td className="px-6 py-4">{product.Stock}</td>
                <td className="px-6 py-4 flex items-center gap-3 pb-5">
                  <Pen size={20} />
                  <Eye size={20} />
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

export default AllProducts
