import { IonPage, IonContent } from "@ionic/react";
import {} from "react";
import Header from "../features/navigation/layout/Header";

interface RegisterProps {}

export default function Register({}: RegisterProps) {
  return (
    <IonPage>
      <Header title="Register" />
      <IonContent fullscreen>
         {/* code for register here */}
      </IonContent>
    </IonPage>
  );
}
