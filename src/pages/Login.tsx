import { IonPage, IonContent } from "@ionic/react";
import Header from "../features/navigation/layout/Header";

interface LoginProps {}

export default function Login({}: LoginProps) {
  return (
    <IonPage>
      <Header title="Login" />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
}
