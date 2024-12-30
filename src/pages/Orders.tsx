import AllOrders from "../components/tables/AllOrders";
import DefaultLay from "../layout/DefaultLay";

const Orders = () => {
  return (
    <DefaultLay>
      <section className="p-7 overflow-y-auto">
        <h1 className="text-2xl font-semibold font-poppins">Orders</h1>
        <div className="w-full my-4">
          <AllOrders />
        </div>
      </section>
    </DefaultLay>
  )
};

export default Orders
