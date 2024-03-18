import { IonApp, setupIonicReact } from "@ionic/react";
import { useEffect, useState } from "react";
import Layout from "./features/navigation/layout/Layout";
// import all styles and theme files from ionic and custom files
import "./styles/styles_imports";
import { IonReactRouter } from "@ionic/react-router";
import axios from "axios";
import { endpoints } from "./data/api";
import { useAppContext } from "./contexts/AppContext";

setupIonicReact();

export default function App() {
  const { dispatchUser } = useAppContext();
  const [areUserDataFetched, setAreUserDataFetched] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(endpoints.getAuthUserData, {
          withCredentials: true,
        });
        const userData = response.data;
        console.log("🚀 ~ fetchUserData ~ userData:", userData);
        dispatchUser({ type: "fetch-user-data", value: userData });
      } catch (err) {
        console.log("err", err);
      } finally {
        setAreUserDataFetched(true);
      }
    };
    fetchUserData();
  }, []);

  return (
    <IonApp>
      <h1>{process.env.NODE_ENV}</h1>
      {areUserDataFetched && (
        <IonReactRouter>
          <Layout />
        </IonReactRouter>
      )}
    </IonApp>
  );
}
