import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
} from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import { endpoints } from "../data/api";

interface RegisterProps {}

export default function Register({}: RegisterProps) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würdest du deine Registrierungslogik implementieren,
    // z.B. einen API-Aufruf, um den Benutzer zu registrieren.
    console.log({ userName, password }, typeof userName);
    try {
      const response = await postUser();
      console.log(response); // log the response from the backend
      // Handle the response as needed, e.g., show a success message or redirect the user
    } catch (error) {
      console.error("Fehler bei der Registrierung:", error);
      // Handle errors, e.g., show an error message to the user
    }
  };

  const postUser = async () => {
    const data = {
      userName,
      password,
    };
    const response = await fetch(endpoints.register, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return (
    <IonPage>
      <Header title="Register" />
      <IonContent fullscreen>
        <form onSubmit={handleRegister}>
          <IonItem>
            <IonLabel position="floating">Benutzername</IonLabel>
            <IonInput
              value={userName}
              onIonChange={(e) => setUsername(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Passwort</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonButton type="submit" expand="block" style={{ marginTop: 20 }}>
            Registrieren
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}
