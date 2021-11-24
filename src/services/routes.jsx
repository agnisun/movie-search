import React, {Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {PageLoad} from "../components/PageLoad/PageLoad";

export const Routes = () => {
  const Homepage = lazy(() => import('../pages/HomePage/HomePage'))
  const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
  const SerialsPage = lazy(() => import('../pages/SerialsPage/SerialsPage'))
  const ProductMoviePage = lazy(() => import('../pages/ProductMoviePage/ProductMoviePage'))
  const ProductSerialPage = lazy(() => import('../pages/ProductSerialPage/ProductSerialPage'))
  const FavouritePage = lazy(() => import('../pages/FavouritePage/FavouritePage'))
  
  return (
    <Suspense fallback={<PageLoad />}>
      <Switch>
        <Route path={"/"} exact render={() => <Homepage/>} />
        <Route path={"/movie"} exact render={() => <MoviesPage/>} />
        <Route path={"/movie/:id"} exact render={() => <ProductMoviePage/>} />
        <Route path={"/tv"} exact render={() => <SerialsPage/>} />
        <Route path={"/tv/:id"} exact render={() => <ProductSerialPage/>} />
        <Route path={"/favourite"} exact render={() => <FavouritePage/>} />
        <Redirect to={"/"} />
      </Switch>
    </Suspense>
  );
};
