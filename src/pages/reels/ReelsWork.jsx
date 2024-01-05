import React from 'react'
import "./reels.css"

import modernArchi from "../../assets/contentsImg/pageName/modern.webp"

import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { CiSaveUp2 } from "react-icons/ci";

const ReelsWork = (props) => {
  return (
<div className="reels-container">
      <div className="video-container">
        <video src= {props.video} autoPlay controls muted></video>
        <div className="reels-details-container">
        <div className="reels-img">
            <img src={modernArchi} alt="" />
        </div>
        <div className="reels-details">
          <p className='reels-name'>{props.reelsName}</p>
          <p className='reels-followedBy'>{props.followers}</p>
        </div>
        <div className="reels-follow-btn">
          <button>{props.followBtn}</button>
        </div>
        </div>
        </div>
        <div className="reels-icons-container">
          <span><CiHeart className='reels-icons reels-heart'/>{props.reelsLikes}</span>
          <span><FaRegCommentAlt className='reels-icons reels-comment'/>{props.reelsComments}</span>
          <span><PiShareFatLight className='reels-icons'/></span>
          <span><CiSaveUp2 className='reels-icons'/></span>
        </div>
      </div>  
  )
}

export default ReelsWork;