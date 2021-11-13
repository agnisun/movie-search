import {Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage";
import {MoviesPage} from "../pages/MoviesPage/MoviesPage";
import {SerialsPage} from "../pages/SerialsPage/SerialsPage";
import {ProductMoviePage} from "../pages/ProductMoviePage/ProductMoviePage";
import {FavouritePage} from "../pages/FavouritePage/FavouritePage";
import {ProductSerialPage} from "../pages/ProductSerialPage/ProductSerialPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={HomePage} />
      <Route path={"/movies"} exact component={MoviesPage} />
      <Route path={"/movies/:id"} exact component={ProductMoviePage} />
      <Route path={"/tv"} exact component={SerialsPage} />
      <Route path={"/tv/:id"} exact component={ProductSerialPage} />
      <Route path={"/favourite"} exact component={FavouritePage} />
      <Redirect to={"/"} />
    </Switch>
  );
};
