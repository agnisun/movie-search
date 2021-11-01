import React from "react";
import {Box} from "@chakra-ui/react";
import {MoviesCards} from "../../components/MoviesCards/MoviesCards";

export const MoviesPage = () => {
  return (
    <Box minH={"100vh"}>
      <Box pl={"56px"}>
        <MoviesCards />
      </Box>
    </Box>
  );
};
