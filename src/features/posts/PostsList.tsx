import { IonList } from "@ionic/react";
import Post from "./Post";
import posts from "../../data/posts.json";

export default function PostsList() {
  // fetch posts data and replace the posts from the JSON file
  return (
    <IonList inset={true}>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </IonList>
  );
}

