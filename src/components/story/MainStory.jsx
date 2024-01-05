import React from "react";
import StoryData from "./StoryData"
import Story from "./Story"

const MainStory = () => {
    return (
        <>
        {StoryData.map((currentValue) => (
        <Story 
        key={currentValue.id}
        images={currentValue.img}
        profileName= {currentValue.pname}
        />
        ))}
        </>
     )
}

export default MainStory;