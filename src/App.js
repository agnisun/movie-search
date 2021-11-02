import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./services/routes";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar/NavBar";

export const App = () => {
  //TODO: новая страница продукта
  //TODO: Eslint подключить
  //TODO: Довести до ума что имеется
  //TODO: сортировка moviesPage реализовать
  const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DATA", payload: data }));

    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((genres) => dispatch({ type: "SET_GENRES", payload: genres }));

    fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((config) => dispatch({ type: "SET_CONFIG", payload: config }));

    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_SERIALS", payload: data }));
  }, [dispatch]);

  return (
    <Router>
      <Box pos={"relative"}>
        <NavBar />
        <Routes />
      </Box>
    </Router>
  );
};
