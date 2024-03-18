import Login from "../../../pages/Login";
import Posts from "../../../pages/Posts";
import Profile from "../../../pages/Profile";
import { ComponentType } from "react";
import Register from "../../../pages/Register";
import { paths } from "./paths";
import { useAppContext } from "../../../contexts/AppContext";

export interface Route {
  path: string;
  exact?: boolean;
  component: ComponentType<any>;
  isProtected?: boolean;
  redirectTo?: string;
}

const useRoutes = () => {
  const { userState } = useAppContext();

  const routes: Route[] = [
    {
      path: paths.profile,
      exact: true,
      component: Profile,
      isProtected: !userState.isLoggedIn,
      redirectTo: paths.login,
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
      path: paths.posts,
      exact: true,
      component: Posts,
    },
  ];

  return routes;
};

export default useRoutes;
