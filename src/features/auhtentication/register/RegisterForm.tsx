import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
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
  const [error, setError] = useState({
    userName: "",
    password: "",
  });

  const registerUser = async () => {
    const newUser = {
      userName,
      password,
    };

    // block
    const response = await fetch(endpoints.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    console.log("🚀 ~ registerUser ~ data:", data);
    console.log("data.error:", data.error?.errors[0]);
    if (!response.ok) {
      const inputTypeErrors = data.error?.errors;
      if (inputTypeErrors) {
        inputTypeErrors.forEach((inputTypeError: any) => {
          if (inputTypeError["password"]) {
            setError((prev) => ({
              ...prev,
              password: inputTypeError.password,
            }));
          }
          if (inputTypeError["userName"]) {
            setError((prev) => ({
              ...prev,
              userName: inputTypeError.userName,
            }));
          }
        });
      }
      throw new Error(
        JSON.stringify(data.error.errors) ||
          data.error.message ||
          "Registration failed."
      );
    }
    return data;
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser();
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
          aria-label="User Name"
          className={``}
          value={userName}
          onIonInput={(e) => setUsername(e.detail.value!)}
          clearInput
          minlength={2}
        ></IonInput>
        {error.userName && <IonNote color="danger">{error.userName}</IonNote>}
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          aria-label="Password"
          className={``}
          type="password"
          value={password}
          onIonInput={(e) => setPassword(e.detail.value!)}
          clearInput
          minlength={8}
        ></IonInput>
        {error.password && <IonNote color="danger">{error.password}</IonNote>}
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
