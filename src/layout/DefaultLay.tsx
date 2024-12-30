import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DefaultLay = ({ children }) => {
  return (
    <>
      <div className="hidden lg:block w-1/4 xl:w-1/5 h-screen fixed top-0 left-0 z-50 bg-[#1C2434]">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col lg:absolute top-0 right-0 w-full lg:w-3/4 xl:w-4/5 h-screen">
        <Navbar />
        <main className="flex-1 overflow-y-auto w-full bg-[#F1F5F9]">
          {children}
        </main>
      </div>
    </>
  )
};

export default DefaultLay
