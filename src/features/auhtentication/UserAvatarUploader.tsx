import { IonIcon, IonInput, IonItem, IonLabel } from "@ionic/react";
import { cloudUpload } from "ionicons/icons";
import { useRef } from "react";

export default function UserAvatarUploader() {
  const itemRef = useRef<HTMLIonItemElement>(null);

  const handleClickUploadAvatarImage = () => {
    itemRef.current?.querySelector("input")?.click();
  };

  const handleUploadAvatarImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log("🚀 ~ file", file);
    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);
      // axios.post(endpoints.uploadAvatar, formData, {
      // });
      console.log("formData:", formData);
    }
  };
  return (
    <IonItem ref={itemRef} onClick={handleClickUploadAvatarImage}>
      <IonIcon slot="start" icon={cloudUpload} />
      <IonLabel>Update Avatar</IonLabel>
      <input type="file" hidden onChange={handleUploadAvatarImage} />
    </IonItem>
  );
}
