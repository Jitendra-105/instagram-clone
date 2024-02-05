import React from "react";
import MainStory from "../../components/story/MainStory";
import "./home.css";
import Suggestions from "../../components/suggestions/Suggestions";
import Contents from "../../components/contents/Contents";
import Create from "../create/Create";


const Home = () => {

  return (
    <>
      <div className="home-container">
        <div className="column-container">
          <div className="main-story-container">
            <MainStory />
          </div>
          <div className="main-contents-container">
             <Create />
            <Contents />
          </div>
        </div>
        <div className="main-suggestion-container">
          <Suggestions />
        </div>
      </div>
    </>
  );
};

export default Home;



