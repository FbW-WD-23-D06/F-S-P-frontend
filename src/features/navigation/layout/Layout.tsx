import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { chatbubbleOutline, person } from "ionicons/icons";
import { Redirect } from "react-router";
import Routes from "./Routes";

interface LayoutProps {}

export default function Layout({}: LayoutProps) {
  return (
    <IonReactRouter>
      {/* <Redirect from="*" to="/" /> */}
      {/* Redirect  to "/"" if there is not route with the curent path */}
      <IonTabs>
        <IonRouterOutlet>
          <Routes />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Profile" href="/profile">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Posts" href="/">
            <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
