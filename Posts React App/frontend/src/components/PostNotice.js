import React, { useState } from "react";
import { postNotice } from "../api/notices";

const PostNotice = () => {
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postNotice({ authorName, title, description });
      setAuthorName("");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error posting notice:", error);
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Post Notice</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="authorName">Author Name:</label>
            <input
              type="text"
              id="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Post Notice</button>
        </form>
      </div>
    </div>
  );
};

export default PostNotice;
