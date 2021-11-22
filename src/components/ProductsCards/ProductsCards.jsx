import React, { useEffect } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Flex,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { SearchField } from "../SearchField/SearchField";
import { Pagination } from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { searchDefaultAction } from "../../features/modules/search/search.actions";
import { ProductCard } from "./ProductCard";

export const ProductsCards = ({ product }) => {
  const title = product === "movie" ? "Movies" : "Tv";
  const dispatch = useDispatch();
  const isLoading = !useSelector((state) => state.search.loading);

  useEffect(() => {
    dispatch(searchDefaultAction(product, 1));
  }, []);

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
            {isLoading ? (
              <>
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
              </>
            ) : (
              <Flex justifyContent={"center"}>
                <CircularProgress
                  thickness={"5px"}
                  size="60px"
                  isIndeterminate
                />
              </Flex>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
