import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { person, chatbubbleOutline } from "ionicons/icons";
import {} from "react";
import { Redirect, Route } from "react-router";
import Posts from "../../../pages/Posts";
import Profile from "../../../pages/Profile";

interface LayoutProps {}

export default function Layout({}: LayoutProps) {
  return (
    <IonReactRouter>
      <Redirect from="*" to="/" />
      {/* Redirect  to "/"" if there is not route with the curent path */}
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Posts />
          </Route>
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
