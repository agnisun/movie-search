import React, { useState } from "react";
import { Box, Container, Grid, Heading } from "@chakra-ui/react";

export const FavouriteCards = () => {
  const [favourite, setFavourite] = useState();

  return (
    <Box>
      <Container>
        <Heading py={"24px"}>Favourite</Heading>
        <Grid
          flex={"1 1 auto"}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={"20px"}
        >
          {/*{movies &&*/}
          {/*movies.map((movie) => <FavouriteCard key={movie.id} movie={movie} />)}*/}
        </Grid>
      </Container>
    </Box>
  );
};
