// pages/Posts.tsx

import { IonContent, IonPage } from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import PostsList from "../features/posts/PostsList";

export default function Posts() {
  return (
    <IonPage>
      <Header title="Posts" />
      <IonContent fullscreen>
        <PostsList />
      </IonContent>
    </IonPage>
  );
}
