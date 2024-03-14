import Login from "../../../pages/Login";
import Posts from "../../../pages/Posts";
import Profile from "../../../pages/Profile";
import { ComponentType } from "react";
import Register from "../../../pages/Register";
import { paths } from "./paths";

export interface Route {
  path: string;
  exact?: boolean;
  component: ComponentType<any>;
}

const routes: Route[] = [
  {
    path: paths.profile,
    exact: true,
    component: Profile,
  },
  {
    path: paths.register,
    exact: true,
    component: Register,
  },
  {
    path: paths.login,
    exact: true,
    component: Login,
  },
  {
    path: paths.logout,
    exact: true,
    component: Login,
  },
  {
    path: paths.posts,
    exact: true,
    component: Posts,
  },
];

export default routes;