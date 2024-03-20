import { IonAvatar } from "@ionic/react";
import {} from "react";
import { useHistory } from "react-router";
import { paths } from "../navigation/routing/paths";
import { useAppContext } from "../../contexts/AppContext";

export default function UserAvatar() {
  const { userState } = useAppContext();
  const history = useHistory();
  return (
    <IonAvatar
      onClick={() => history.push(paths.profile)}
      slot="end"
      className="ion-margin"
      style={{ height: "44px", width: "44px" }}
    >
      <img alt="Silhouette of a person's head" src={userState.avatarImg} />
    </IonAvatar>
  );
}
