import { ApexOptions } from "apexcharts";
import { Earth } from "lucide-react";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TopCountries = () => {
  const [chartBar] = useState({
    series: [
      {
        name: "Total Revenue",
        data: [18, 42, 58, 72, 64, 85, 95, 115, 145],
      },
      {
        name: "Total Sales",
        data: [10, 30, 36, 48, 51, 68, 77, 99, 138],
      },
    ],
    title: `${React.createElement(Earth)} Top Countries`, // Title change to 'Top Countries'
    options: {
      chart: {
        type: "bar", // Set chart type to 'bar'
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2, // For bar charts, you can control the stroke width
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["USA", "India", "Germany", "UK", "France", "Canada", "Italy", "Australia", "Japan"], // Sample countries
        labels: {
          style: {
            fontSize: '12px',
            fontFamily: 'Poppins, sans-serif',
          },
        },
      },
      fill: {
        colors: ['#3C50E0', '#80CAEE'], // Bar color
      },
    } as ApexOptions,
  });

  return (
    <div>
      {/* Custom Title with Icon */}
      <div className="flex items-center gap-2 my-4 text-xl font-bold font-poppins">
        <Earth />
        <span>Top Countries</span>
      </div>
      <ReactApexChart
        options={chartBar.options}
        series={chartBar.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TopCountries;
