import React from "react";
import {Box, Button} from "@chakra-ui/react";
import {SortField} from "./SortField/SortField";
import {FilterField} from "./FilterField/FilterField";
import {useDispatch, useSelector} from "react-redux";
import {moviesSearchRequestAction} from "../../features/modules/searchMovies/searchMovies.actions";

export const SearchField = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.searchMovies.sort);
  const release = useSelector((state) => state.searchMovies.release);
  const genres = useSelector((state) => state.searchMovies.genres);
  const certification = useSelector(
    (state) => state.searchMovies.certification
  );

  const handleSearch = () => {
    dispatch(moviesSearchRequestAction(sort, release, genres, certification));
  };

  return (
    <Box
      minW={{ base: "100%", "2md": "260px" }}
      w={{ base: "100%", "2md": "260px" }}
      color={"black"}
      mr={{ base: "0", "2md": "30px" }}
      mb={{ base: "50px", "2md": "0" }}
    >
      <SortField />
      <FilterField />
      <Button onClick={handleSearch} colorScheme={"blue"} w={"100%"}>
        Search
      </Button>
    </Box>
  );
};
