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
import { validations } from "../validations";

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
  const [errorMessage, setErrorMessage] = useState({
    userName: "",
    password: "",
  });

  const isUserNameValid = validations.userName(userName) === "valid";
  const isPasswordValid = validations.password(password) === "valid";

  const registerUser = async () => {
    const newUser = {
      userName,
      password,
    };

    try {
      const response = await fetch(endpoints.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error?.message || data?.message || "Registration failed."
        );
      }

      return data;
    } catch (error) {
      console.error("🚀 ~ registerUser ~ error:", error);
      throw error;
    }
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
        message: err.message,
        color: "danger",
        duration: 3000,
        buttons: "dismiss",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUserNameChange = (e: CustomEvent) => {
    setUsername(e.detail.value);
    const userNameValidation = validations.userName(userName);
    setErrorMessage((prev) => ({
      ...prev,
      userName: userNameValidation,
    }));
  };

  const handlePasswordChange = (e: CustomEvent) => {
    setPassword(e.detail.value);
    const passwordValidation = validations.password(password);
    setErrorMessage((prev) => ({
      ...prev,
      password: passwordValidation,
    }));
  };

  return (
    <form onSubmit={handleRegister}>
      <IonItem>
        <IonLabel position="floating">User Name</IonLabel>
        <IonInput
          aria-label="User Name"
          value={userName}
          onIonInput={handleUserNameChange}
          clearInput
          minlength={2}
          counter
        />
        {errorMessage.userName && !isUserNameValid && (
          <IonNote color="danger">{errorMessage.userName}</IonNote>
        )}
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          aria-label="Password"
          type="password"
          value={password}
          onIonInput={handlePasswordChange}
          clearInput
          minlength={8}
        />
        {errorMessage.password && !isPasswordValid && (
          <IonNote color="danger">{errorMessage.password}</IonNote>
        )}
      </IonItem>
      <IonButton
        disabled={
          isToastVisible || loading || !isUserNameValid || !isPasswordValid
        }
        type="submit"
        expand="block"
        style={{ marginTop: 20 }}
      >
        {loading ? <IonSpinner /> : "Register"}
      </IonButton>
    </form>
  );
}
