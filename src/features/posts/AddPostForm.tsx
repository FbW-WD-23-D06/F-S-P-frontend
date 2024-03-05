import React, { useState } from "react";
import { endpoints } from "../../data/api";

export default function AddPostForm() {
  const [tittle, setTittle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoints.posts, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tittle, content }),
      });
      if (!response.ok) {
        throw new Error("Failed to Save Post");
      }

      setTittle("");
      setContent("");
    } catch (error:any) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tittle">Tittle</label>
        <input
          type="text"
          id="tittle"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Save Post</button>
    </form>
  );
}
