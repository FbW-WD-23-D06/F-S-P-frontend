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
import { useEffect } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../data/api";

export default function Profile() {
  const { userState } = useAppContext();

  const history = useHistory();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          localStorage.removeItem("token");
          return history.push(paths.login);
        }
        const tokenRes = await fetch(
         `${BASE_URL}/users/token-valid`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": token,
            },
          }
        );
        console.log("tokenRes:", tokenRes);
        const user = await tokenRes.json();
        console.log("🚀 ~ checkToken ~ user:", user);
        if (tokenRes.status !== 200) {
          history.push(paths.login);
        }
      } catch (error) {
        console.log(error);
        history.push(paths.login);
      }
    };
    checkToken();
  }, [history]);

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
          <IonItem button routerLink={paths.login}>
            <IonIcon icon={logInOutline} slot="start" />
            <IonLabel>Login</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
}
