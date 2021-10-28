import React from "react";
import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { SortField } from "../SortField/SortField";

export const MoviesCards = () => {
  const data = useSelector((state) => state.movie.data.results);
  const movies = data && data.filter((movie, idx) => idx < 60);

  return (
    <Box>
      <Container>
        <Heading py={"24px"}>Movies</Heading>
        <Flex w={"100%"} alignItems={"flex-start"}>
          <SortField />
          <Grid
            flex={"1 1 auto"}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={"20px"}
          >
            {movies && movies.map((movie) => <MovieCard movie={movie} />)}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
