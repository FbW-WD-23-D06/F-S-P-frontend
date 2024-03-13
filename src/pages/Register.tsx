import { IonContent, IonPage } from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import AuthForm from "../features/auhtentication/AuthForm";

export default function Register() {
  return (
    <IonPage>
      <Header title="Register" />
      <IonContent fullscreen>
        <AuthForm authType="register" />
      </IonContent>
    </IonPage>
  );
}
