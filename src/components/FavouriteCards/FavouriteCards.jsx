import React from "react";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { FavouriteCard } from "./FavouriteCard";

export const FavouriteCards = () => {
  const favoriteList = useSelector((state) => state.favourite.favouriteList);
  const movies = useSelector((state) => state.data.movies.results);
  const serials = useSelector((state) => state.data.serials.results);
  const favourites =
    serials &&
    movies &&
    favoriteList &&
    movies.concat(serials).filter((el) => favoriteList.indexOf(el.id) > -1);

  return (
    <Box>
      <Container>
        <Heading py={"24px"}>Favourite</Heading>
        <Grid
          flex={"1 1 auto"}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={"20px"}
        >
          {favourites &&
            favourites.map((product) => (
              <FavouriteCard key={product.id} product={product} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
