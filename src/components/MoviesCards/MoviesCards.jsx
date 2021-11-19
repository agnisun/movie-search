import React, { useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import { SearchField } from "../SearchField/SearchField";
import {
  moviesSearchDefaultAction,
  moviesSearchRequestAction,
  nextPageAction,
  prevPageAction,
} from "../../features/modules/searchMovies/searchMovies.actions";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const MoviesCards = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.searchMovies.sort);
  const release = useSelector((state) => state.searchMovies.release);
  const genres = useSelector((state) => state.searchMovies.genres);
  const certification = useSelector(
    (state) => state.searchMovies.certification
  );

  useEffect(() => {
    dispatch(moviesSearchDefaultAction(1));
  }, []);

  const movies = useSelector((state) => state.searchMovies.movies.results);
  const totalPages = useSelector(
    (state) => state.searchMovies.movies.total_pages
  );
  const page = useSelector((state) => state.searchMovies.movies.page);

  const handleNextPage = () => {
    let currentPage = page;

    if (currentPage < totalPages) {
      window.scrollTo(0, 0);
      currentPage += 1;
      dispatch(nextPageAction(currentPage));
      dispatch(
        moviesSearchRequestAction(
          sort,
          release,
          genres,
          certification,
          currentPage
        )
      );
    }
  };

  const handlePrevPage = () => {
    let currentPage = page;

    if (currentPage > 1) {
      window.scrollTo(0, 0);
      currentPage -= 1;
      dispatch(prevPageAction(currentPage));
      dispatch(
        moviesSearchRequestAction(
          sort,
          release,
          genres,
          certification,
          currentPage
        )
      );
    }
  };

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
          <Box flex={"1 1 auto"} w={{ base: "100%", "2md": "auto" }}>
            <Grid
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              gap={"20px"}
              mb={"50px"}
            >
              {movies &&
                movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
            </Grid>

            <Flex justifyContent={"center"}>
              <IconButton
                disabled={page <= 1}
                onClick={handlePrevPage}
                colorScheme={"blue"}
                aria-label={"prev-page"}
                icon={<ChevronLeftIcon />}
              />
              <Flex mx={"15px"} alignItems={"center"}>
                <Box>
                  {page} / {totalPages}
                </Box>
              </Flex>
              <IconButton
                disabled={page >= totalPages}
                onClick={handleNextPage}
                colorScheme={"blue"}
                aria-label={"next-page"}
                icon={<ChevronRightIcon />}
              />
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
