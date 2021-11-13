import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "./services/routes";
import {Box} from "@chakra-ui/react";
import {NavBar} from "./components/Navbar/NavBar";
import {dataRequestAction} from "./features/modules/data/data.actions";
import ScrollToTop from "./common/ScrollToTop";
import {addFavouriteAction} from "./features/modules/favourite/favourite.actions";

export const App = () => {
  // TODO: сортировка moviesPage реализовать
  // TODO: сделать поиск
  // TODO: Оптимизация
  // TODO: lazy load (разобраться)
  //Проблемы: верстка image
  //Проблемы: Eslint подключить

  const dispatch = useDispatch();
  const setData = () => dispatch(dataRequestAction());
  const setGenresMovies = () => dispatch(dataRequestAction());
  const setGenresSerials = () => dispatch(dataRequestAction());
  const setConfig = () => dispatch(dataRequestAction());
  const setSerials = () => dispatch(dataRequestAction());
  const localStorage = window.localStorage;

  useEffect(() => {
    setData();
    setGenresMovies();
    setGenresSerials();
    setConfig();
    setSerials();

    for (let i = 0; i < localStorage.length; i++) {
      const favourite = +localStorage.getItem(localStorage.key(i));

      if (!isNaN(favourite)) {
        dispatch(addFavouriteAction(favourite));
      }
    }
  }, []);

  return (
    <Router>
      <Box pos={"relative"}>
        <NavBar />
        <ScrollToTop />
        <Routes />
      </Box>
    </Router>
  );
};
