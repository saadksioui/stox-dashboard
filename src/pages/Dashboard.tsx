import Card from "../components/Card";
import RevenueChart from "../components/charts/RevenueChart";
import TopContries from "../components/charts/TopContries";
import RecentOrders from "../components/tables/RecentOrders";
import TopCustomers from "../components/tables/TopCustomers";
import { cardsData } from "../constants";
import DefaultLay from "../layout/DefaultLay";

const Dashboard = () => {
  return (
    <DefaultLay>
      <section className="p-7 overflow-y-auto">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {
            cardsData.map((card, index) => (
              <Card key={index} icon={card.icon} title={card.title} value={card.value} percentage={card.percentage} />
            ))
          }
        </div>

        {/* Charts */}
        <div className="w-full flex flex-col lg:flex-row gap-6 my-10">
          <div className="w-full lg:w-3/5 bg-white p-3 border border-gray-300 shadow-md">
            <RevenueChart />
          </div>
          <div className="w-full lg:w-2/5 bg-white p-3 border border-gray-300 shadow-md">
            <TopContries />
          </div>
        </div>

        {/* Tables */}
        <div className="w-full flex flex-col lg:flex-row gap-6 my-10">
          <div className="w-full lg:w-1/2 bg-white p-3 border border-gray-300 shadow-md">
            <RecentOrders />
          </div>
          <div className="w-full lg:w-1/2 bg-white p-3 border border-gray-300 shadow-md">
            <TopCustomers />
          </div>
        </div>
      </section>
    </DefaultLay>
  )
};

export default Dashboard
