import { IonPage, IonContent, IonRouterLink, IonButton } from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import AuthForm from "../features/auhtentication/AuthForm";
import { paths } from "../features/navigation/routing/paths";

export default function Login() {
  return (
    <IonPage>
      <Header title="Login" />
      <IonContent fullscreen>
        <AuthForm authType="login" />
        <hr color="grey" className="ion-margin"/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <IonButton routerLink={paths.register} color="success">
            Create new account
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}
