import React, {useEffect} from "react";
import {Box, Container, Flex, Grid, Heading} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {MovieCard} from "./MovieCard";
import {SearchField} from "../SearchField/SearchField";
import {moviesSearchRequestAction} from "../../features/modules/searchMovies/searchMovies.actions";

export const MoviesCards = () => {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.search.sort)
  
  useEffect(() => {
    dispatch(moviesSearchRequestAction(sort))
  }, [])
  
  const movies = useSelector((state) => state.search.movies.results);

  return (
    <Box>
      <Container>
        <Heading py={"24px"}>Movies</Heading>
        <Flex
          w={"100%"}
          alignItems={{base: "center", "2md": "flex-start"}}
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
