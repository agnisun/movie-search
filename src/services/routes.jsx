import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageLoad } from '../components/PageLoad/PageLoad';

export const Routes = () => {
  const Homepage = lazy(() => import('../pages/HomePage/HomePage'));
  const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
  const SerialsPage = lazy(() => import('../pages/SerialsPage/SerialsPage'));
  const ProductMoviePage = lazy(() =>
    import('../pages/ProductMoviePage/ProductMoviePage')
  );
  const ProductSerialPage = lazy(() =>
    import('../pages/ProductSerialPage/ProductSerialPage')
  );
  const SearchMoviePage = lazy(() =>
    import('../pages/SearchMoviePage/SearchMoviePage')
  );
  const SearchSerialPage = lazy(() =>
    import('../pages/SearchSerialPage/SearchSerialPage')
  );
  const FavouritePage = lazy(() =>
    import('../pages/FavouritePage/FavouritePage')
  );

  return (
    <Suspense fallback={<PageLoad />}>
      <Switch>
        <Route path={'/'} exact render={() => <Homepage />} />
        <Route path={'/movie'} exact render={() => <MoviesPage />} />
        <Route path={'/movie/:id'} render={() => <ProductMoviePage />} />
        <Route path={'/tv'} exact render={() => <SerialsPage />} />
        <Route path={'/tv/:id'} render={() => <ProductSerialPage />} />
        <Route
          path={'/search/movie'}
          exact
          render={() => <SearchMoviePage />}
        />
        <Route path={'/search/tv'} exact render={() => <SearchSerialPage />} />
        <Route path={'/favourite'} exact render={() => <FavouritePage />} />
        <Redirect to={'/'} />
      </Switch>
    </Suspense>
  );
};
