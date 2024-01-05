import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.css"

const Layout = () => {
  return (
    <>
      <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Layout;
