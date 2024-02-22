import { IonList } from "@ionic/react";
import Post from "./Post";
import posts from "../../data/posts.json";

interface PostsListProps {}

export default function PostsList({}: PostsListProps) {
  return (
    <IonList inset={true}>
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </IonList>
  );
}
