import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSpinner,
} from "@ionic/react";
import { useState } from "react";
import { endpoints } from "../../../data/api";

export default function RegisterForm() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const postUser = async () => {
    const data = {
      userName,
      password,
    };
    try {
      const response = await fetch(endpoints.register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();
      return response.json();
    } catch (error) {
      console.error("Post user error :", error);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await postUser();
        console.log(response);
    } catch (error) {
      console.error("Handle register user error :", error);
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
          onIonChange={(e) => setUsername(e.detail.value!)}
          clearInput
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          type="password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
          clearInput
        ></IonInput>
      </IonItem>

      <IonButton type="submit" expand="block" style={{ marginTop: 20 }}>
        {loading ? <IonSpinner /> : "Register"}
      </IonButton>
    </form>
  );
}
