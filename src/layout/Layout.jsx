import React,{useState} from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.css"

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Layout = () => {
  const [showNav, setShowNav] = useState(false)

  const handleShowNavbar = () => {
   setShowNav(!showNav)
  }
  return (
    <>
      <div className="layout-container">
      <Sidebar showNavbar={showNav} />
      <div className="ham-menu" onClick={handleShowNavbar} >
        {showNav ?  < IoClose/> :  < GiHamburgerMenu />}       
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Layout;





