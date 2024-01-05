import React from "react";
import contentsData from "./ContentsData";
import ContentsWork from "./ContentsWork";

const Contents = () => {
  return (
    <>
    {contentsData.map((curr, index) => (
        <ContentsWork 
        key={index}
        userImg={curr.userImg}
        userName={curr.userName}
        url={curr.url}
        likes={curr.likes}
        postDetails={curr.postDetails}
        totalComments={curr.totalComments}
        />
    ))}
    </>
  );
};

export default Contents;
