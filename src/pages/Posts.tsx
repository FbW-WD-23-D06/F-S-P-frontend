import { IonContent, IonPage } from "@ionic/react";
import Header from "../features/navigation/layout/Header";
import PostsList from "../features/posts/PostsList";
import { useHistory } from "react-router";
import { useEffect } from "react";

export default function Posts() {

  const history = useHistory();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          localStorage.removeItem("token");
          return history.push("/login");
        }
        const tokenRes = await fetch("http://localhost:8888/users/token-valid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        });
        console.log("tokenRes:", tokenRes);
        const user = await tokenRes.json();
        console.log("🚀 ~ checkToken ~ user:", user);
        if (tokenRes.status !== 200) {
          history.push("/login");
        }

        if (tokenRes.status !== 200) {
          history.push("/login");
        }
      } catch (error) {
        console.log(error);
        history.push("/login");
      }
    };
    checkToken();
  }, [history]);

  return (
    <IonPage>
      <Header title="Posts" />
      <IonContent fullscreen>
        <PostsList />
      </IonContent>
    </IonPage>
  );
}
