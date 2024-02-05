import React,{useState} from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./layout.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Layout = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [showNavbar, setNavbar] = useState("none")
  
  const handleNavbar = () => {
      setToggleNav(!toggleNav)
      setNavbar((prevShowNavbar) => (prevShowNavbar === "none" ? "block" : "none"));
    
  }
  return (
    <>
      <div className="layout-container">
      <Sidebar showNavbar= {showNavbar}/>
      <div className="ham-menu" onClick={handleNavbar}>
      { toggleNav ? < IoClose/> : < GiHamburgerMenu/> }
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default Layout;
