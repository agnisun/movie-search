import React from "react";
import {IntroSlider} from "../../components/IntroSlider/IntroSlider";
import {NewMovies} from "../../components/NewMovies/NewMovies";
import {NewSerials} from "../../components/NewSerials/NewSerials";
import {Box} from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <Box minH={"100vh"}>
      <IntroSlider />
      <Box pl={{ base: "0", "2md": "56px" }}>
        <NewMovies />
        <NewSerials />
      </Box>
    </Box>
  );
};
