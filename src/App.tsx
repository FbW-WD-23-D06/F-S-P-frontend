import { IonApp, setupIonicReact } from "@ionic/react";
import Layout from "./features/navigation/layout/Layout";
// import all styles and theme files from ionic and custom files
import "./styles/styles_imports";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <Layout />
  </IonApp>
);

export default App;
