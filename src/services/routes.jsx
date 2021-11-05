import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { MoviesPage } from "../pages/MoviesPage/MoviesPage";
import { SerialsPage } from "../pages/SerialsPage/SerialsPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import {FavouritePage} from "../pages/FavouritePage/FavouritePage";

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={HomePage} />
      <Route path={"/movies"} exact component={MoviesPage} />
      <Route path={"/movies/:id"} exact component={ProductPage} />
      <Route path={"/tv"} exact component={SerialsPage} />
      <Route path={"/favourite"} exact component={FavouritePage} />
      <Redirect to={"/"} />
    </Switch>
  );
};
