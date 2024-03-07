import { IonApp, setupIonicReact } from "@ionic/react";
import Layout from "./features/navigation/layout/Layout";
// import all styles and theme files from ionic and custom files
import "./styles/styles_imports";
import { IonReactRouter } from "@ionic/react-router";

setupIonicReact();

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
      <Layout />
      </IonReactRouter>
    </IonApp>
  );
}
