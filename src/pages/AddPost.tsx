// AddPost.tsx
import React from "react";
import AddPostForm from "../features/posts/AddPostForm";
import { IonContent, IonPage } from "@ionic/react";
import Header from "../features/navigation/layout/Header";

export default function AddPost() {
  return (
    <IonPage>
      <IonContent>
        <Header title="Add New Post" />
        <AddPostForm />
      </IonContent>
    </IonPage>
  );
}
