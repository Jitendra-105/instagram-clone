import React, { useState } from "react";
import "./contents.css"


import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatLight } from "react-icons/pi";
import { CiSaveUp2 } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";


const ContentsWork = (props) => {
  const isVideo = props.url.endsWith(".mp4"); // endsWith is a string (js) method which checks whether a string ends with a specified sequence of characters. 

  // To like and dislike
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const handleLike = () => {
    setLike((prevLike) => !prevLike)
    setLikeCount((prevCount) => (like ? prevCount - 1 : prevCount + 1));
  }

  // To add comments 
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [commentCount, setCommentCount] = useState(0)
  
  const handleComment = () => {
    if (comment.trim() !== "") {
      setComments((prevComments) => [...prevComments, comment]);
      setCommentCount((prevComment) => prevComment + 1)
      setComment(""); // Clear the input field after posting a comment
    }
  };

  return (

    <div className="contents-container">
    <div className="top-contents">
      <div className="left-contents">
        <img src={props.userImg} className="img-fluid" alt="" />
        <p>{props.userName}</p>
      </div>
      <div className="right-contents">
        <span>...</span>
      </div>
    </div>
    <div className="posts-container">
      {isVideo ? (
        <video controls autoPlay muted>
          <source src={props.url} type="video/mp4" />
        </video>
      ) : (
        <img src={props.url} alt="" onClick={handleLike} />
      )}
    </div>
    <div className="bottom-contents">
      <div className="contents-icons">
        <div className="left-icons">
          <span>
            {like ? <FcLike /> : <CiHeart />}
          </span>
          <span>
            <FaRegCommentAlt />
          </span>
          <span>
            <PiShareFatLight />
          </span>
        </div>
        <div className="right-icons">
          <span>
            <CiSaveUp2 />
          </span>
        </div>
      </div>
      <div className="total-likes">
        <span>{`${likeCount} likes`}</span>
      </div>
      <div className="posts-details">
        <p>{props.postDetails}</p>
      </div>
      <div className="posts-comments">
        <p>{`${commentCount} comments`}</p>
        {comments.map((comment, index) => (
          <p key={index} className="user-comments">
            {comment}
          </p>
        ))}
        <div className="comments-container">
          <input
            type="text"
            name="comments"
            placeholder="Add comments here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <span className="comment-btn" onClick={handleComment}>
            post
          </span>
          <span>
            <MdOutlineEmojiEmotions />
          </span>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ContentsWork;

