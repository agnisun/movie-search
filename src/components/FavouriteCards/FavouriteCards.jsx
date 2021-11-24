import React from "react";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { FavouriteCard } from "./FavouriteCard";
import { useSelector } from "react-redux";

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
          flex={"1 1 auto"}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={"20px"}
        >
          {favouriteList &&
            favouriteList.map((product) => (
              <FavouriteCard key={product.id} product={product} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
