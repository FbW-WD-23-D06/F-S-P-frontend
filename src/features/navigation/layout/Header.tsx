import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import UserAvatar from "../../auhtentication/UserAvatar";
import { useAppContext } from "../../../contexts/AppContext";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { userState } = useAppContext();
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
        {userState.isLoggedIn && <UserAvatar />}
      </IonToolbar>
    </IonHeader>
  );
}
