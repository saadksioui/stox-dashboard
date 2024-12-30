import { topCustomers } from "../../constants";
import { Pen, Trash } from "lucide-react";

const TopCustomers = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold font-poppins">Top Customers</h1>
      <div className="w-[95%] mx-auto overflow-y-auto mt-7">
        <table className="w-full">
          <thead className="text-sm text-gray-700 uppercase bg-gray-50 font-poppins">
            <tr>
              <th scope="col" className="px-3 py-3 text-left">ID</th>
              <th scope="col" className="px-3 py-3 text-left">Name</th>
              <th scope="col" className="px-5 py-3 text-left">Email</th>
              <th scope="col" className="px-3 py-3 text-left">Sales</th>
              <th scope="col" className="px-9 py-3 text-left">Joined Date</th>
              <th scope="col" className="px-3 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              topCustomers.map((customer, index) => (
                <tr key={index} className="bg-white border-b font-poppins">
                  <td className="px-3 py-4">
                    {customer.id}
                  </td>
                  <td className="px-3 py-4 flex items-center gap-3">
                    <img src="/assets/default-avatar.png" alt="" width={100} height={100} className="size-7 shadow p-1 rounded-full object-contain" />
                    <div>
                      <h1 className="text-xs font-semibold">
                        {customer.name}
                      </h1>
                      <p className="text-xs text-gray-700">
                        {customer.gender}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    {customer.email}
                  </td>
                  <td className="px-3 py-4 text-sm">
                    {customer.sales}
                  </td>
                  <td className="px-9 py-4 text-sm">
                    {customer.joinedDate}
                  </td>
                  <td className="px-6 py-4 flex gap-3 mb-5">
                    <Pen size={20} />
                    <Trash color="red" size={20} />
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

export default TopCustomers
