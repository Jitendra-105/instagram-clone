import React from 'react';
import ReelsData from './ReelsData';
import ReelsWork from './ReelsWork';

const Reels = () => {
  return (
    <>
    {ReelsData.map((value, index) => (
      <ReelsWork 

      key={index}
      video={value.video}
      reelsName= {value.rname}
      followers={value.rfollowedBy}
      followBtn= {value.rfollowBtn}
      reelsLikes={value.rlikes}
      reelsComments={value.rcomments}
      />
    ))}
    </>
  )
}

export default Reels;