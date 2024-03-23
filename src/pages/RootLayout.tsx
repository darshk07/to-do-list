import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const RootLayout = () => {
  return (
    <div className="w-screen h-screen bg-primary dark:bg-black grid grid-cols-12 overflow-hidden relative">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
