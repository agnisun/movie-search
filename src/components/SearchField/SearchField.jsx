import React from "react";
import {Box, Button} from "@chakra-ui/react";
import {SortField} from "./SortField/SortField";
import {FilterField} from "./FilterField/FilterField";
import {useDispatch, useSelector} from "react-redux";
import {moviesSearchRequestAction} from "../../features/modules/searchMovies/searchMovies.actions";

export const SearchField = () => {
  const dispatch = useDispatch()
  const sort = useSelector(state => state.search.sort)
  const release = useSelector(state => state.search.release)
  
  const handleSearch = () => {
    dispatch(moviesSearchRequestAction(sort, release))
  }
  
  return (
    <Box
      minW={{ base: "100%", "2md": "260px" }}
      w={{ base: "100%", "2md": "260px" }}
      color={"black"}
      mr={{base: "0", "2md": "30px"}}
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
