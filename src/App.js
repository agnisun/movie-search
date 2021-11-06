import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./services/routes";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar/NavBar";
import { dataRequestAction } from "./features/modules/data/data.actions";

export const App = () => {
  // TODO: доделать страница продукта (добавить трейлер + еще информации)
  // TODO: сортировка moviesPage реализовать
  // TODO: верстка карточек
  // TODO: Favourite page сделать
  // TODO: CardDetails модальное окно логика (favourite list)
  // TODO: Оптимизация
  // TODO: Запросы в отдельный файл (разобраться)
  // TODO: lazy load (разобраться)
  //Проблемы: верстка image
  //Проблемы: Eslint подключить

  const dispatch = useDispatch();
  const setData = () => dispatch(dataRequestAction());
  const setGenres = () => dispatch(dataRequestAction());
  const setConfig = () => dispatch(dataRequestAction());
  const setSerials = () => dispatch(dataRequestAction());

  useEffect(() => {
    setData();
    setGenres();
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
