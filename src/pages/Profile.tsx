import { IonContent, IonPage } from "@ionic/react";
import Header from "../features/navigation/layout/Header";

export default function Profile() {
  return (
    <IonPage>
      <Header title="Profile" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
}
