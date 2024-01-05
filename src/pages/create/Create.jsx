import React, { useState, useRef } from 'react';
import CreateWork from './CreateWork';
import "./create.css"

const Create = () => {
  const [upload, setUpload] = useState([]);
  const [caption, setCaption] = useState('');

  const uploadBtn = useRef(null)

  const handleUploads = () => {
    uploadBtn.current.click()
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpload((prevUploads) => [...prevUploads, { image: reader.result, caption }]);
        setCaption(''); // Clear caption after uploading
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="upload-form">
        <input type="file" name="uploadPost" onChange={handleImageUpload} ref={uploadBtn} style={{display: "none"}}/>
        <button className="post-btn" onClick={handleUploads}>Share a Post</button>
        <input
          
          type="text"
          placeholder="Add a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className='caption'
        />
      </div>
      <div className="uploaded-posts">
        {upload.map((uploaded, index) => (
          <CreateWork
            key={index}
            caption = {uploaded.caption}
            url={uploaded.image}
            likes={uploaded.likes}
            postDetails={uploaded.postDetails}
            totalComments={uploaded.totalComments}
          />
        ))}
      </div>
    </>
  );
};

export default Create;
