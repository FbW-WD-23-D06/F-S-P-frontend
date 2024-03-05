// pages/Posts.tsx

import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
} from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import { add } from "ionicons/icons";
import PostsList from "../features/posts/PostsList";

export default function Posts() {
  return (
    <IonPage>
      <Header title="Posts" />
      <IonContent fullscreen>
        <IonFab
          slot="fixed"
          horizontal="end"
          vertical="top"
          className="ion-margin-bottom"
        >
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
        <br />
        <br />
        <PostsList />
      </IonContent>
    </IonPage>
  );
}
