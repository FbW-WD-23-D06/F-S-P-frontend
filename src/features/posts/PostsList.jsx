import { IonList } from "@ionic/react";
import Post from "./Post";
import posts from "../../data/posts.json";
import { useEffect } from "react";

export default function PostsList() {
  // fetch posts data and replace the posts from the JSON file

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:8888/posts");
      const data = await response.json();
      console.log(data);
    };
    fetchPosts();
  }, []);

  return (
    <IonList inset={true}>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </IonList>
  );
}
