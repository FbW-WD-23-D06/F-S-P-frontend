import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import RegisterForm from "../features/auhtentication/register/RegisterForm";
import Header from "../features/navigation/layout/Header";
import useToastManager, { ToastInfo } from "../hooks/useToastManager";

export default function Register() {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastInfo, setToastInfo] = useState<ToastInfo>({
    message: "",
    color: "",
  });

  useToastManager({ toastInfo, setToastInfo, setIsToastVisible });

  return (
    <IonPage>
      <Header title="Register" />
      <IonContent fullscreen>
        <RegisterForm
          setToastInfo={setToastInfo}
          isToastVisible={isToastVisible}
        />
      </IonContent>
    </IonPage>
  );
}
