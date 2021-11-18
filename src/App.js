import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "./services/routes";
import {Box} from "@chakra-ui/react";
import {NavBar} from "./components/Navbar/NavBar";
import {dataRequestAction,} from "./features/modules/data/data.actions";
import ScrollToTop from "./common/ScrollToTop";
import {addFavouriteAction} from "./features/modules/favourite/favourite.actions";

export const App = () => {
  // TODO: filter moviesPage реализовать
  // TODO: сделать поиск
  // TODO: Redux saga бесконечный скролл
  // TODO: Оптимизация
  // TODO: lazy load (разобраться)
  //Проблемы: Eslint подключить

  const dispatch = useDispatch();
  const localStorage = window.localStorage;

  useEffect(() => {
    dispatch(dataRequestAction());

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
