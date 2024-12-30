import { Order } from "../../types";
import axios from "axios";
import { Edit } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";



const AllOrders = () => {

  const [orders, setOrders] = useState<Order[]>([]);
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [statusChosen, setStatusChosen] = useState("");

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/models/orders.json");
      setOrders(response.data);
      setAllOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatusChosen(event.target.value);
  };

  const handleSearchProduct = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (statusChosen === "all") {
      setOrders(allOrders);
    } else {
      const filteredOrders = allOrders.filter((order) =>
        order.Status.toLowerCase().includes(statusChosen.toLowerCase())
      );
      setOrders(filteredOrders);
    }
  };

  return (
    <div className="w-full flex flex-col my-10 bg-white border border-gray-300">
      <div className="w-full flex justify-end p-4 border-b border-gray-300">
        <form onSubmit={handleSearchProduct} className="w-full flex items-center gap-3">
          <select name="status" className="p-2 font-epilogue border border-gray-500 rounded-md" value={statusChosen} onChange={handleSelectChange}>
            <option value="all">All</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <input type="submit" value="Apply" className="py-2 px-3 font-poppins font-medium bg-primary-500 text-white rounded-md"/>
        </form>
      </div>
      <div className="w-[98%] mx-auto overflow-y-auto">
        <table className="w-full">
          <thead className="text-sm text-gray-700 border-b font-poppins">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">Order ID</th>
              <th scope="col" className="px-6 py-3 text-left">Customer</th>
              <th scope="col" className="px-6 py-3 text-left">Order date</th>
              <th scope="col" className="px-6 py-3 text-left">Status</th>
              <th scope="col" className="px-6 py-3 text-left">Total</th>
              <th scope="col" className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => (
                <tr key={index} className="bg-white border-b font-poppins">
                  <td className="px-6 py-4">{order.OrderID}</td>
                  <td className="px-6 py-4">{order.Customer}</td>
                  <td className="px-6 py-4">{order.OrderDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${order.Status === "Shipped" ? "bg-[#1E90FF]/15 text-[#1E90FF]"
                      : order.Status === "Pending" ? "bg-[#FFA500]/15 text-[#FFA500]" :
                      order.Status === "Delivered" ? "bg-[#32CD32]/15 text-[#32CD32]" :
                      order.Status === "Cancelled" ? "bg-[#FF4500]/15 text-[#FF4500]" : "bg-red-100 text-red-800"}`}>{order.Status}</span>
                  </td>
                  <td className="px-6 py-4">{order.Total}</td>
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

export default AllOrders
