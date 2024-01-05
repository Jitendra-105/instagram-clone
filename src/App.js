import React, { useState } from 'react';
import Create from './pages/create/Create';
import Profile from './pages/profile/Profile';

const App = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreation = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <Create onPostCreate={handlePostCreation} />
      <Profile posts={posts} />
    </div>
  );
};

export default App;
