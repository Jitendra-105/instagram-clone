import React from 'react'
import suggestionsData from './SuggestionsData';
import SuggestionWork from './SuggestionWork';
import profile from "../../assets/suggestionsImg/profile.jpg"

const Suggestions = () => {
  return (
   <>
   <div className="sub-suggestions-container">

   <div className="profile-container">
        <div className="profile-img">
            <img src={profile} alt="" />
        </div>
        <div className="profile-details">
          <p>Hrithik</p>
          <p>Hrithik Roshan</p>
        </div>
        <div className="switch-btn">
          <button>Switch</button>
        </div>
    </div>
    <p>Suggestions for you</p>
    {suggestionsData.map((currentValue, index) => (
      <SuggestionWork 
          key={index}
          img={currentValue.img}
          sname={currentValue.sname}
          followedBy={currentValue.followedBy}
          followBtn={currentValue.followBtn}
      />
    ))}
   </div>
   </>
  )
}

export default Suggestions;