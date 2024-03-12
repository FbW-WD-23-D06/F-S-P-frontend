import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonSpinner,
} from "@ionic/react";
import { FormEvent, useState } from "react";
import { ToastInfo } from "../../hooks/useToastManager";
import { validations } from "./validations";
import { endpoints } from "../../data/api";

interface AuthFormProps {
  authType: "register" | "login";
  setToastInfo: (toastInfo: ToastInfo) => void;
  isToastVisible: boolean;
}

export default function AuthForm({
  authType,
  setToastInfo,
  isToastVisible,
}: AuthFormProps) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    userName: "",
    password: "",
  });

  const isUserNameValid = validations.userName(userName) === "valid";
  const isPasswordValid = validations.password(password) === "valid";

  const isRegister = authType === "register";
  const buttonText = isRegister ? "Register" : "Login";

  const registerUser = async () => {
    const user = {
      userName,
      password,
    };

    const failedMessages = {
      login: "Login failed.",
      register: "Registration failed.",
    };

    try {
      const response = await fetch(
        isRegister ? endpoints.register : endpoints.login,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          data.error?.message || data?.message || failedMessages[authType]
        );
      }

      return data;
    } catch (error) {
      console.error("🚀 ~ authentication ~ error:", error);
      throw error;
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerUser();
      setToastInfo({
        message: `${isRegister ? "Registration" : "Login"} successful!`,
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
        {!isUserNameValid && (
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
        {!isPasswordValid && (
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
        {loading ? <IonSpinner /> : buttonText}
      </IonButton>
    </form>
  );
}
