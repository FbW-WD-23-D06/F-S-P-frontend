import { Redirect, Route } from "react-router";
import useRoutes from "../routing/routes";

export default function Routes() {
  const routes = useRoutes();
  return (
    <>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={() =>
            route.isProtected && route.redirectTo ? (
              <Redirect to={route.redirectTo} />
            ) : (
              <route.component />
            )
          }
        />
      ))}
    </>
  );
}
