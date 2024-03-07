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

interface RegisterProps {}

export default function Register({}: RegisterProps) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ username, password });
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
