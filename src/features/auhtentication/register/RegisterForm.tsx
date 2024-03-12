import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonSpinner,
} from "@ionic/react";
import { FormEvent, useEffect, useState } from "react";
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
  const [error, setError] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    const userNameValidation = validations.userName(userName);
    const passwordValidation = validations.password(password);

    if (validations.userName(userName) === "valid") {
      setError((prev) => ({
        ...prev,
        userName: "",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        userName: validations.userName(userName),
      }));
    }
    if (validations.password(password) === "valid") {
      setError((prev) => ({
        ...prev,
        password: "",
      }));
    }
    if (validations.password(password) !== "valid") {
      setError((prev) => ({
        ...prev,
        password: validations.password(password),
      }));
    }
  }, [userName, password]);

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
    console.log("data.error:", data.error?.errors[0]);

    if (!response.ok) {
      const inputTypeErrors = data.error?.errors;
      throw new Error(
        JSON.stringify(inputTypeErrors) ||
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
        message: err,
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
    setError((prev) => ({
      ...prev,
      userName: userNameValidation,
    }));
  };

  const handlePasswordChange = (e: CustomEvent) => {
    setPassword(e.detail.value);
    const passwordValidation = validations.password(password);
    setError((prev) => ({
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
          className={``}
          value={userName}
          onIonInput={handleUserNameChange}
          clearInput
          minlength={2}
          counter
        ></IonInput>
        {error.userName && error.userName !== "valid" && (
          <IonNote color="danger">{error.userName}</IonNote>
        )}
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          aria-label="Password"
          className={``}
          type="password"
          value={password}
          onIonInput={handlePasswordChange}
          clearInput
          minlength={8}
        ></IonInput>
        {error.password && error.password !== "valid" && (
          <IonNote color="danger">{error.password}</IonNote>
        )}
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
