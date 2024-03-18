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
import { useAppContext } from "../contexts/AppContext";
import { endpoints } from "../data/api";

export default function Profile() {
  const { userState, dispatchUser } = useAppContext();
  console.log(userState.isLoggedIn);

  const handleLogout = async () => {
    try {
      await fetch(endpoints.logout, {
        method: "POST",
        credentials: "include",
      });
      dispatchUser({ type: "logout" });
    } catch (err) {
      console.log("err", err);
    }
  };

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
          {userState.isLoggedIn ? (
            <IonItem button onClick={handleLogout}>
              <IonIcon icon={logInOutline} slot="start" />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          ) : (
            <IonItem button routerLink={paths.login}>
              <IonIcon icon={logInOutline} slot="start" />
              <IonLabel>Login</IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
