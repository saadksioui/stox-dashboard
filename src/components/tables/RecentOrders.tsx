import { format } from "date-fns";
import { ordersData } from "../../constants";
import { Eye, Trash } from "lucide-react";

const RecentOrders = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold font-poppins">Recent Orders</h1>
      <div className="w-[95%] mx-auto overflow-x-auto">
        <table className="w-full mt-7">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 font-poppins">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">Product</th>
              <th scope="col" className="px-6 py-3 text-left">Price</th>
              <th scope="col" className="px-6 py-3 text-left">Date</th>
              <th scope="col" className="px-6 py-3 text-left">Status</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {ordersData && ordersData.length > 0 ? (
              ordersData.slice(0, 4).map((product, index) => (
                <tr key={index} className="bg-white border-b font-poppins">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={product.Image}
                      alt={product.Product || "Product image"}
                      width={100}
                      height={100}
                      className="size-10 bg-white shadow p-1 rounded-lg object-contain"
                    />
                    <span className="text-xs font-semibold">{product.Product}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">{product.Price}</td>
                  <td className="px-6 py-4 text-xs">
                    {format(new Date(product.Date), "PPP")}
                  </td>
                  <td className="px-6 py-4 text-xs">
                    <span
                      className={`px-2 border rounded-full ${product.Status === "Shipped"
                          ? "text-green-500 border-green-500"
                          : product.Status === "Pending"
                            ? "text-blue-500 border-blue-500"
                            : "text-red-500 border-red-500"
                        }`}
                    >
                      {product.Status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-3 mb-5">
                    <button
                      aria-label="View order details"
                      className="text-gray-500 hover:text-black"
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      aria-label="Delete order"
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No orders to display.
                </td>

              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
