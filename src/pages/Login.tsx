import { IonPage, IonContent } from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import AuthForm from "../features/auhtentication/AuthForm";

export default function Login() {
  return (
    <IonPage>
      <Header title="Login" />
      <IonContent fullscreen>
        <AuthForm authType="login" />
      </IonContent>
    </IonPage>
  );
}

