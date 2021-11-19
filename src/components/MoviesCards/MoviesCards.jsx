import React, {useEffect} from "react";
import {Box, Container, Flex, Grid, Heading} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {MovieCard} from "./MovieCard";
import {SearchField} from "../SearchField/SearchField";
import {moviesSearchDefaultAction} from "../../features/modules/searchMovies/searchMovies.actions";

export const MoviesCards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesSearchDefaultAction());
  }, []);

  const movies = useSelector((state) => state.searchMovies.movies.results);

  return (
    <Box>
      <Container>
        <Heading py={"24px"}>Movies</Heading>
        <Flex
          w={"100%"}
          alignItems={{ base: "center", "2md": "flex-start" }}
          flexDir={{ base: "column", "2md": "row" }}
        >
          <SearchField />
          <Grid
            flex={"1 1 auto"}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={"20px"}
          >
            {movies &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
