// AddPost.tsx
import React from "react";
import PostForm from "../components/PostForm";
import { IonPage } from "@ionic/react";

export default function AddPost() {
  return (
    <IonPage>
      <IonContent>
        <Header title="Add New Post" />
        <PostForm />
      </IonContent>
    </IonPage>
  );
}
