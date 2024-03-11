import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonSpinner,
} from "@ionic/react";
import { FormEvent, useState } from "react";
import { endpoints } from "../../../data/api";
import { ToastInfo } from "../../../hooks/useToastManager";

interface RegisterFormProps {
  setToastInfo: (toastInfo: ToastInfo) => void;
  isToastVisible: boolean;
}

export default function RegisterForm({
  setToastInfo,
  isToastVisible,
}: RegisterFormProps) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async () => {
    const newUser = {
      userName,
      password,
    };
    const response = await fetch(endpoints.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log("🚀 ~ registerUser ~ data:", data);
    if (!response.ok) {
      throw new Error(
        data.errors?.error?.message ||
          data.message ||
          "Registration failed due to an error."
      );
    }
    return data;
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await registerUser();
      console.log("response:", response);
      setToastInfo({
        message: "Registration successful!",
        color: "success",
        duration: 3000,
      });
    } catch (err: any) {
      console.error("Register user error:", err);
      setToastInfo({
        message: "Registration failed",
        color: "danger",
        duration: 3000,
        buttons: "dismiss",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <IonItem>
        <IonLabel position="floating">User Name</IonLabel>
        <IonInput
          value={userName}
          onIonInput={(e) => setUsername(e.detail.value!)}
          clearInput
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          type="password"
          value={password}
          onIonInput={(e) => setPassword(e.detail.value!)}
          clearInput
        ></IonInput>
      </IonItem>
      <IonButton
        disabled={isToastVisible || loading}
        type="submit"
        expand="block"
        style={{ marginTop: 20 }}
      >
        {loading ? <IonSpinner /> : "Register"}
      </IonButton>
    </form>
  );
}
