import React from "react";
import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { SearchField } from "../SearchField/SearchField";
import { Pagination } from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export const ProductsCards = ({ product }) => {
  const title = product === "movie" ? "Movies" : "Tv";
  const products = useSelector((state) => state.search.products.results);

  return (
    <Box>
      <Container>
        <Heading py={"24px"}>{title}</Heading>
        <Flex
          w={"100%"}
          alignItems={{ base: "center", "2md": "flex-start" }}
          flexDir={{ base: "column", "2md": "row" }}
        >
          <SearchField product={product} />
          <Box flex={"1 1 auto"} w={{ base: "100%", "2md": "auto" }}>
            <Grid
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              gap={"20px"}
              mb={"50px"}
            >
              {products &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
            <Pagination product={product} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
