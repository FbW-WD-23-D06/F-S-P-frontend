import { IonList } from "@ionic/react";
import Post from "./Post";
import posts from "../../data/posts.json";

export default function PostsList() {
  return (
    <IonList inset={true}>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </IonList>
  );
}
