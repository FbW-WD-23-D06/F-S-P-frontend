import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import { logInOutline } from "ionicons/icons";
import { paths } from "../features/navigation/routing/paths";

export default function Profile() {
  return (
    <IonPage>
      <Header title="Profile" />
      <IonContent fullscreen>
        <IonList>
          <IonItem button routerLink={paths.register}>
            <IonIcon icon={logInOutline} slot="start"></IonIcon>
            <IonLabel>Register</IonLabel>
          </IonItem>
          <IonItem button routerLink={paths.login}>
            <IonIcon icon={logInOutline} slot="start"></IonIcon>
            <IonLabel>Login</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
