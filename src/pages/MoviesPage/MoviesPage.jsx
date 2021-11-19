import React from "react";
import { Box } from "@chakra-ui/react";
import { MoviesCards } from "../../components/MoviesCards/MoviesCards";

export const MoviesPage = () => {
  return (
    <Box
      minH={"100vh"}
      pt={{ base: "100px", "2md": "0" }}
      pl={{ base: "0", "2md": "56px" }}
      pb={"50px"}
    >
      <MoviesCards />
    </Box>
  );
};
