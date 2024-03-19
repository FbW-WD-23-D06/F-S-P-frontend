import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonItemDivider,
} from "@ionic/react";
import { logOut, trash } from "ionicons/icons";
import { useAppContext } from "../contexts/AppContext";
import { endpoints } from "../data/api";
import UserName from "../features/auhtentication/UserName";
import Header from "../features/navigation/layout/Header";

export default function Profile() {
  const { userState, dispatchUser } = useAppContext();

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

  const handleDeleteUser = async () => {
    console.log("delete user");
  }

  return (
    <IonPage>
      <Header title="Profile" />
      <IonContent fullscreen className="ion-padding-top">
        <IonList>
          <UserName />
        </IonList>
        <IonList>
          <IonItemDivider color="medium">Settings</IonItemDivider>
          {userState.isLoggedIn && (
            <IonItem button onClick={handleLogout}>
              <IonIcon icon={logOut} slot="start" />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          )}
          {userState._id && (
            <IonItem button onClick={handleDeleteUser}>
              <IonIcon icon={trash} slot="start" />
              <IonLabel>Delete User</IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
