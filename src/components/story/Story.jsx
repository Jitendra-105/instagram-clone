import React from "react";
import "./story.css";

const Story = (props) => {
  return (
      <div className="stories">
        <img src={props.images} alt="" />
        <p>{props.profileName}</p>
      </div>
  );
};

export default Story;
