import { IonContent, IonPage } from "@ionic/react";
import RegisterForm from "../features/auhtentication/register/RegisterForm";
import Header from "../features/navigation/layout/Header";

export default function Register() {
  return (
    <IonPage>
      <Header title="Register" />
      <IonContent fullscreen>
        <RegisterForm />
      </IonContent>
    </IonPage>
  );
}
