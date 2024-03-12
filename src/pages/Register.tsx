import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import Header from "../features/navigation/layout/Header";
import useToastManager, { ToastInfo } from "../hooks/useToastManager";
import AuthForm from "../features/auhtentication/AuthForm";

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
        <AuthForm
          authType="register"
          setToastInfo={setToastInfo}
          isToastVisible={isToastVisible}
        />
      </IonContent>
    </IonPage>
  );
}
