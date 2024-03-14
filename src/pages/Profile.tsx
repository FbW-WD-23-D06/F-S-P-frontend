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
import { useContext } from 'react';
import { logInOutline, personAdd } from "ionicons/icons";
import { paths } from "../features/navigation/routing/paths";
import { useAppContext } from "../contexts/AppContext";
import { endpoints } from "../data/api";


export default function Profile() {
  const { userState, dispatchUser } = useAppContext();
  console.log(userState.isLoggedIn);

  return (
    <IonPage>
      <Header title="Profile" />
      <IonContent fullscreen className="ion-padding-top">
        <IonText>
          <h2 className="ion-margin">{userState.userName}</h2>
        </IonText>
        <IonList>
          <IonItem button routerLink={paths.register}>
            <IonIcon icon={personAdd} slot="start" />
            <IonLabel>Register</IonLabel>
          </IonItem>
          { userState.isLoggedIn ?
            <IonItem button onClick={
              async () => {
                const response = await fetch(endpoints.logout, {
                  method: "POST", headers: {
                    "Content-Type": "application/json",
                  }
                });
                console.log(response);
                if (response.ok) {
                  console.log('logout')
                  dispatchUser({type: "logout"});
                }
              }}>
              <IonIcon icon={logInOutline} slot="start" />
              <IonLabel>Logout</IonLabel>
            </IonItem>
            :
            <IonItem button routerLink={paths.login}>
              <IonIcon icon={logInOutline} slot="start" />
              <IonLabel>Login</IonLabel>
            </IonItem>
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
}
