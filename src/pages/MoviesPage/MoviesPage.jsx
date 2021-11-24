import React from "react";
import { Box } from "@chakra-ui/react";
import { ProductsCards } from "../../components/ProductsCards/ProductsCards";

const MoviesPage = () => {
  return (
    <Box
      minH={"100vh"}
      pt={{ base: "100px", "2md": "0" }}
      pl={{ base: "0", "2md": "56px" }}
      pb={"50px"}
    >
      <ProductsCards product={"movie"} />
    </Box>
  );
};

export default MoviesPage;
