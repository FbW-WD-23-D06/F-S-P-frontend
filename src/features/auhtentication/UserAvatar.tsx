import { IonAvatar } from "@ionic/react";
import {} from "react";
import { useHistory } from "react-router";
import { paths } from "../navigation/routing/paths";

interface UserAvatarProps {}

export default function UserAvatar({}: UserAvatarProps) {
  const history = useHistory();
  return (
    <IonAvatar
      onClick={() => history.push(paths.profile)}
      slot="end"
      className="ion-margin"
      style={{ height: "44px", width: "44px" }}
    >
      <img
        alt="Silhouette of a person's head"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
      />
    </IonAvatar>
  );
}
