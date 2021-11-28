import React from "react";
import {Box, Container, Grid, Heading} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {ProductCard} from "../ProductsCards/ProductCard";

export const FavouriteCards = () => {
  const favouriteList = useSelector((state) => state.favourite.favouriteList);

  return (
    <Box>
      <Container>
        <Box py={"24px"}>
          <Heading>Favourite</Heading>
          <Box as={"h6"} fontSize={"16px"} fontWeight={"400"} opacity={".7"}>
            {favouriteList.length + " items"}
          </Box>
        </Box>
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={"20px"}
        >
          {favouriteList &&
            favouriteList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
