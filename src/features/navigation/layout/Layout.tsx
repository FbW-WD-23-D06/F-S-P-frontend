import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { chatbubbleOutline, person } from "ionicons/icons";
import { Redirect, useLocation } from "react-router";
import Routes from "./Routes";
import { paths } from "../routing/paths";

interface LayoutProps {}

export default function Layout({}: LayoutProps) {
  const location = useLocation();

  const isCurrentPathTab = (path: string) => location.pathname === path;

  return (
    <>
      <Redirect from="*" to={paths.posts} />
      {/* Redirect  to paths.posts if there is not route with the curent path */}
      <IonTabs>
        <IonRouterOutlet>
          <Routes />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton
            tab="Profile"
            href={paths.profile}
            selected={isCurrentPathTab(paths.profile)}
          >
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton
            tab="Posts"
            href={paths.posts}
            selected={isCurrentPathTab(paths.posts)}
          >
            <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
}
