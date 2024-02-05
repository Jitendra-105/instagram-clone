import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import { FaHome } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './sidebar.css'


const Sidebar = (prop) => {
  const { loginWithRedirect, logout, isAuthenticated  } = useAuth0();
  return (
   <div className="sidebar" style={{display: prop.showNavbar}}>
   <div className="logo">Instagram</div>
   <div className="other-pages"> 
   <Link to="home"><div className="home logo">< FaHome className='logo-icon'/> <span>Home</span></div></Link>
   <Link to="reels"><div className="reels logo">< IoIosVideocam className='logo-icon'/><span>Reels</span></div></Link>
   <Link to="message"><div className="message logo"><FaFacebookMessenger className='logo-icon'/><span>Messages</span></div></Link>
   <Link to="notification"><div className="notifications logo">< FaRegHeart className='logo-icon'/><span>Notifications</span></div></Link>
   <Link to="profile"><div className="profile logo">< FaRegCircle className='logo-icon'/><span>Profile</span></div></Link>
   {
          isAuthenticated ? (
            <button className="logo log-btn" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
          ) : (
            <button className='logo log-btn' onClick={() => loginWithRedirect()}>Log In</button>
          )
        }
   </div>
   </div>
  )

}

export default Sidebar