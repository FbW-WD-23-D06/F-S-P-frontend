import { IonItem, IonIcon, IonInput, IonButton } from "@ionic/react";
import { pencil, backspace, save } from "ionicons/icons";
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

export default function UserName() {
  const [userNameInputIsOpen, setUserNameInputIsOpen] = useState(false);
  const { userState } = useAppContext();
  const [newUserName, setNewUserName] = useState(userState.userName);

  const handleUpdateUserName = async () => {
    console.log("newUserName", newUserName);
  };

  const handleCancelUpdateUserName = () => {
    setUserNameInputIsOpen(false);
    setNewUserName(userState.userName);
  };

  return (
    <>
      {!userNameInputIsOpen ? (
        <IonItem
          className="cursor-pointer"
          onClick={() => setUserNameInputIsOpen(true)}
        >
          <h2 className="truncate-text ion-no-margin ">{userState.userName}</h2>
          <IonIcon icon={pencil} className="ion-margin-start " />
        </IonItem>
      ) : (
        <IonItem>
          <IonInput
            type="text"
            value={newUserName}
            minlength={2}
            maxlength={15}
            name="newUserName"
            placeholder="Enter new user name"
            onIonInput={(e) => setNewUserName(e.detail.value!)}
          />

          <IonButton
            color="primary"
            onClick={handleCancelUpdateUserName}
            className="ion-padding-horizontal"
          >
            <IonIcon icon={backspace} />
          </IonButton>
          <IonButton
            color="success"
            disabled={
              newUserName.length < 2 ||
              newUserName.length > 15 ||
              userState.userName === newUserName
            }
            onClick={handleUpdateUserName}
            className="ion-padding-horizontal"
          >
            <IonIcon icon={save} />
          </IonButton>
        </IonItem>
      )}
    </>
  );
}
