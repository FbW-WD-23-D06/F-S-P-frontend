import Login from "../../../pages/Login";
import Posts from "../../../pages/Posts";
import Profile from "../../../pages/Profile";
import { ComponentType } from "react";
import Register from "../../../pages/Register";

export interface Route {
  path: string;
  exact?: boolean;
  component: ComponentType<any>;
}

const routes: Route[] = [
  {
    path: "/profile",
    exact: true,
    component: Profile,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/",
    exact: true,
    component: Posts,
  },
];

export default routes;