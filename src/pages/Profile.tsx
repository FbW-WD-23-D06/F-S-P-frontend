import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import { logInOutline, personAdd } from "ionicons/icons";
import { paths } from "../features/navigation/routing/paths";

export default function Profile() {
  return (
    <IonPage>
      <Header title="Profile" />
      <IonContent fullscreen className="ion-padding-top">
        <IonText>
          <h2 className="ion-margin">User Name</h2>
        </IonText>
        <IonList>
          <IonItem button routerLink={paths.register}>
            <IonIcon icon={personAdd} slot="start" />
            <IonLabel>Register</IonLabel>
          </IonItem>
          <IonItem button routerLink={paths.login}>
            <IonIcon icon={logInOutline} slot="start" />
            <IonLabel>Login</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
