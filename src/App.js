import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./services/routes";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar/NavBar";
import { dataRequestAction } from "./features/modules/data/data.actions";

export const App = () => {
  // TODO: доделать страница продукта (убрать трейлер если отсутствует + скролл каста)
  // TODO: сортировка moviesPage реализовать
  // TODO: верстка карточек
  // TODO: Favourite page сделать
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

  useEffect(() => {
    setData();
    setGenresMovies();
    setGenresSerials();
    setConfig();
    setSerials();
  }, []);

  return (
    <Router>
      <Box pos={"relative"}>
        <NavBar />
        <Routes />
      </Box>
    </Router>
  );
};
