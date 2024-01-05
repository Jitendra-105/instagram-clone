import React, { useState, useRef } from "react";
import "./profile.css";

import profileImg from "../../assets/suggestionsImg/profile.jpg";
import hrx1 from "../../assets/hrx/1.jpg";
import hrx2 from "../../assets/hrx/2.jpg";
import hrx3 from "../../assets/hrx/3.jpg";
import hrx4 from "../../assets/hrx/4.jpg";
import hrx5 from "../../assets/hrx/5.jpg";
import hrx6 from "../../assets/hrx/6.jpg";
import hrx7 from "../../assets/hrx/7.jpg";
import hrx8 from "../../assets/hrx/8.jpg";

import { IoMdSettings } from "react-icons/io";
import { IoAddCircle } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { CiSaveDown1 } from "react-icons/ci";
import { FaTags } from "react-icons/fa";

const Profile = ({posts}) => {

  //To change the profile picture
  const [image, setiImage] = useState(profileImg);
  const inputRef = useRef(null);

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setiImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="main-profile-container">
      <div className="profile-header">
        <div className="profile-details-container">
          <div className="profile-top-details">
            <ul>
              <li>
                <img src={image} alt="" className="profile-image-style" />
              </li>
              <li className="profile-name">Hrithik Roshan</li>
              <li style={{display: "none"}}>
                {" "}
                <input
                  type="file"
                  name="profileImage"
                  onChange={handleImg}
                  ref={inputRef}
                />
              </li>
              <li>
                <button onClick={handleClick} className="edit-profile-btn">Edit profile</button>
              </li>
              <li>
                <button className="archives-btn">View Archives</button>
              </li>
              <li>
                <IoMdSettings />
              </li>
            </ul>
          </div>
          <div className="profile-followers-details">
            <ul>
              <li>6 Posts</li>
              <li>35m followers</li>
              <li>1 following</li>
            </ul>
          </div>
          <div className="profile-bottom-details">
            <ul>
              <li>HRX |</li>
              <li>#actor |</li>
              <li>#dancer</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="profile-highlights">
        <span className="profile-highlight-icon">
          <IoAddCircle />
        </span>
        <span>New</span>
      </div>
      <hr />
      <div className="profile-posts-container">
        <div className="profile-posts-icons">
          <span className="profile-posted-icons">
            <span>
              <IoMdPhotos />
            </span>
            Posts
          </span>
          <span className="profile-posted-icons">
            <span>
              <CiSaveDown1 />
            </span>
            Saved
          </span>
          <span className="profile-posted-icons">
            <span>
              <FaTags />
            </span>
            Tagged
          </span>
        </div>
        <div className="profile-posted-photos">
          <img src={hrx1} alt="" />
          <img src={hrx2} alt="" />
          <img src={hrx3} alt="" />
          <img src={hrx4} alt="" />
          <img src={hrx5} alt="" />
          <img src={hrx6} alt="" />
          <img src={hrx7} alt="" />
          <img src={hrx8} alt="" />
        </div>
      </div>
      <div>
    </div>
    </div>
  );
};

export default Profile;
