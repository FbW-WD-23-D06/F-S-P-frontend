import {
  IonItem,
  IonIcon,
  IonInput,
  IonButton,
  IonSpinner,
} from "@ionic/react";
import { pencil, backspace, save } from "ionicons/icons";
import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import axios from "axios";
import { BASE_URL } from "../../data/api";
import useToastManager, { ToastInfo } from "../../hooks/useToastManager";

export default function UserName() {
  const [userNameInputIsOpen, setUserNameInputIsOpen] = useState(false);
  const { userState, dispatchUser } = useAppContext();
  const [newUserName, setNewUserName] = useState(userState.userName);
  const [loading, setLoading] = useState(false);

  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastInfo, setToastInfo] = useState<ToastInfo>({
    message: "",
    color: "",
  });

  useToastManager({ toastInfo, setToastInfo, setIsToastVisible });

  const updateUserName = async () => {
    try {
      const response = await axios.patch(`${BASE_URL}/users/${userState._id}`, {
        userName: newUserName,
      });

      const data = await response.data;
      console.log("🚀 ~ updateUserName ~ data:", data);
      console.log("response.status:", response.status);
      if (response.status !== 200) {
        throw new Error(`Error: Update user name failed`);
      }
      dispatchUser({ type: "fetch-user-data", value: data.updatedUser });
      setUserNameInputIsOpen(false);
      setNewUserName(data.updatedUser.userName);
      return data;
    } catch (error) {
      console.error("🚀 ~ update username ~ error:", error);
      throw error;
    }
  };

  const handleUpdateUserName = async () => {
    console.log("newUserName", newUserName);

    setLoading(true);
    try {
      await updateUserName();
      setToastInfo({
        message: `User Name Updated!`,
        color: "success",
        duration: 1500,
      });
    } catch (err: any) {
      console.error("Update user name err:", err);
      setToastInfo({
        message: err.response.data.message,
        color: "danger",
        duration: 10000,
        buttons: "dismiss",
      });
    } finally {
      setLoading(false);
    }
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
            {loading ? <IonSpinner /> : <IonIcon icon={save} />}
          </IonButton>
        </IonItem>
      )}
    </>
  );
}
