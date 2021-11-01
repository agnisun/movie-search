import {Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={HomePage} />
      <Route path={"/movies"} exact component={MoviesPage} />
      <Redirect to={"/"} />
    </Switch>
  );
};
