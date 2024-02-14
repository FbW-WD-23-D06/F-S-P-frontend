import { IonContent, IonPage } from "@ionic/react";
import Header from "../features/navigation/layout/Header";

export default function Posts() {
  return (
    <IonPage>
      <Header title="Posts" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
}
