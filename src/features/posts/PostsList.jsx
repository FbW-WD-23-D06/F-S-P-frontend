import React, { useState, useEffect } from "react";
import { IonList, IonSpinner, IonAlert } from "@ionic/react";
import Post from "./Post";
import { formatDate } from "date-fns";
import { endpoints } from "../../data/api";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sortPostsByDescendingUpdatetAd = (posts) => {
    return posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(endpoints.getAllPosts);
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      {loading && <IonSpinner />}
      {error?.message && <IonAlert isOpen={true} message={error.message} />}
      <IonList inset={true}>
        {/* Sort posts by updatedAt, assuming updatedAt is a valid date string */}
        {sortPostsByDescendingUpdatetAd(posts).map((post) => (
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
