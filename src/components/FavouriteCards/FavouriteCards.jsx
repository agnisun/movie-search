import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import { FavouriteCard } from "./FavouriteCard";

export const FavouriteCards = () => {
  const localStorage = window.localStorage;
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    for (let key in localStorage) {
      if (!isNaN(+key)) {
        const product = JSON.parse(localStorage.getItem(key));

        setFavourites((prev) => [...prev, product]);
      }
    }
  }, []);

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
              <FavouriteCard
                key={product.id}
                product={product}
                setFavourites={setFavourites}
              />
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
