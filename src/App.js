import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./services/routes";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/Navbar/NavBar";
import { dataRequestAction } from "./features/modules/data/data.actions";
import {ScrollToTop} from "./common/ScrollToTop";

export const App = () => {
  // TODO: slider homepage новый flickity
  // TODO: сделать поиск CurrentSearch
  // TODO: Оптимизация
  // TODO: lazy load (разобраться)
  // TODO: Eslint

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataRequestAction());
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
