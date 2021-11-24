import React from "react";
import { IntroSlider } from "../../components/IntroSlider/IntroSlider";
import { Box } from "@chakra-ui/react";
import { NewProducts } from "../../components/NewProducts/NewProducts";

const HomePage = () => {
  return (
    <Box minH={"100vh"}>
      <IntroSlider />
      <Box pl={{ base: "0", "2md": "56px" }}>
        <NewProducts product={"movie"} />
        <NewProducts product={"tv"} />
      </Box>
    </Box>
  );
};

export default HomePage;
