import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;