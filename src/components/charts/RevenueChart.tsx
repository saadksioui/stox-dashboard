import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const RevenueChart = () => {

  const [chartLine] = useState({
    series: [
      {
        name: "Total Revenue",
        data: [18, 42, 58, 72, 64, 85, 95, 115, 145]
      },
      {
        name: "Total Sales",
        data: [10, 30, 36, 48, 51, 68, 77, 99, 138]
      }
    ],
    options: {
      chart: {
        type: "line", // This is a valid chart type.
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        }
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2, // Adjust the stroke width for a better appearance
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
          },
        },
      },
      fill: {
        colors: ['#3C50E0', '#80CAEE']
      },
    } as ApexOptions,
  });

  return (
    <div>
      {/* Custom Title with Icon */}
      <div className="flex flex-col md:flex-row items-center gap-4 ml-0 md:ml-3 my-4 font-poppins">
        <div className="flex gap-4">
          <div className="size-3 bg-[#3C50E0] rounded-full mt-2"></div>
          <div className="flex flex-col">
            <h1 className="text-[#3C50E0] font-epilogue font-bold text-xl">Total Revenue</h1>
            <span className="text-sm text-gray-400 font-poppins">10.01.2024 - 10.09.2024</span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="size-3 bg-[#80CAEE] rounded-full mt-2"></div>
          <div className="flex flex-col">
            <h1 className="text-[#80CAEE] font-epilogue font-bold text-xl">Total Revenue</h1>
            <span className="text-sm text-gray-400 font-poppins">10.01.2024 - 10.09.2024</span>
          </div>
        </div>
      </div>
      <ReactApexChart
        options={chartLine.options}
        series={chartLine.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default RevenueChart;
