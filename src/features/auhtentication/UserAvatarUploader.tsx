import { IonIcon, IonInput, IonItem, IonLabel } from "@ionic/react";
import axios from "axios";
import { cloudUpload } from "ionicons/icons";
import { useRef } from "react";
import { endpoints } from "../../data/api";
import { useAppContext } from "../../contexts/AppContext";

export default function UserAvatarUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { userState, dispatchUser } = useAppContext();

  const handleClickUploadAvatarImage = () => {
    fileInputRef.current?.click();
  };

  const handleUploadAvatarImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log("🚀 ~ file", file);
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const response = await axios.patch(
          `${endpoints.uploadAvatarImg}/${userState._id}`,
          formData
        );
        const data = await response.data;
        dispatchUser({ type: "fetch-user-data", value: data.updatedUser });
      } catch (err) {
        console.log("🚀 ~ err", err);
      }
    }
  };
  return (
    <IonItem onClick={handleClickUploadAvatarImage}>
      <IonIcon slot="start" icon={cloudUpload} />
      <IonLabel>Update Avatar</IonLabel>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleUploadAvatarImage}
      />
    </IonItem>
  );
}
