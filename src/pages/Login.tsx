// pages/Login.tsx

import { IonPage, IonContent } from "@ionic/react";
import Header from "../features/navigation/layout/Header";

interface LoginProps {}

export default function Login({}: LoginProps) {
  return (
    <IonPage>
      <Header title="Login" />
      <IonContent fullscreen>
        <h1>Login</h1>
        <input type="text" placeholder="name" />
        <br />
        <input type="password" placeholder="password"  />
        <br />
        <button>Login</button>
    
       {/* code for login here */}
      </IonContent>
    </IonPage>
  );
}
