import React from 'react'
import "./suggestions.css"

const SuggestionWork = (props) => {
  return (
    <>
    <div className="suggestions-container">
        <div className="suggestion-img">
            <img src={props.img} alt="" />
        </div>
        <div className="suggestion-details">
          <p className='name-para'>{props.sname}</p>
          <p className='followedByPara'>{props.followedBy}</p>
        </div>
        <div className="follow-btn">
          <button>{props.followBtn}</button>
        </div>
    </div>
    </>
  )
}

export default SuggestionWork