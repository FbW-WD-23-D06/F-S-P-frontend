import React, { useState, useEffect } from "react";
import { IonList, IonSpinner, IonAlert } from "@ionic/react";
import Post from "./Post";
import { formatDate } from "date-fns";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8888/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        // Sort posts by updatedAt, assuming updatedAt is a valid date string
        data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {loading && <IonSpinner />}
      {error && <IonAlert isOpen={true} message={error} />}
      <IonList inset={true}>
        {posts.map((post) => (
          <Post
            key={post._id}
            {...post}
            updatedAt={formatDate(post.updatedAt, "dd MMMM yyyy, hh:mm a")}
          />
        ))}
      </IonList>
    </>
  );
}
