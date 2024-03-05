import Posts from "../../../pages/Posts";
import Profile from "../../../pages/Profile";
import { ComponentType } from "react";
import AddPost from "../../../pages/AddPost";

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
    path: "/add-post",
    exact: true,
    component: AddPost,
  },
  {
    path: "/",
    exact: true,
    component: Posts,
  },
];

export default routes;