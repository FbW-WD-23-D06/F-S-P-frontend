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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würdest du deine Registrierungslogik implementieren,
    // z.B. einen API-Aufruf, um den Benutzer zu registrieren.
    console.log({ username, password, email });
  };

  return (
    <IonPage>
      <Header title="Register" />
      <IonContent fullscreen>
        <form onSubmit={handleRegister}>
          <IonItem>
            <IonLabel position="floating">Benutzername</IonLabel>
            <IonInput
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
              clearInput
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">E-Mail</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
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
