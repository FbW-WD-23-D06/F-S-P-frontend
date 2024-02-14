import { Route } from "react-router";
import Posts from "../../../pages/Posts";
import Profile from "../../../pages/Profile";

interface RoutesProps {}

export default function Routes({}: RoutesProps) {
  return (
    <>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/">
        <Posts />
      </Route>
    </>
  );
}
