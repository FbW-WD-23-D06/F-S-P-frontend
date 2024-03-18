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
import { logOut } from "ionicons/icons";
import { paths } from "../features/navigation/routing/paths";
import { useAppContext } from "../contexts/AppContext";

export default function Profile() {
  const { userState } = useAppContext();

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <IonPage>
      <Header title="Profile" />
      <IonContent fullscreen className="ion-padding-top">
        <IonText>
          <h2 className="ion-margin">{userState.userName}</h2>
        </IonText>
        <IonList>
          {userState.isLoggedIn && (
            <IonItem button onClick={handleLogout}>
              <IonIcon icon={logOut} slot="start" />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
