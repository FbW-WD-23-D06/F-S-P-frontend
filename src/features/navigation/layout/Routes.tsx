import { Route } from "react-router";
import routes from "../routing/routes";

interface RoutesProps {}

export default function Routes({}: RoutesProps) {
  return (
    <>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </>
  );
}
