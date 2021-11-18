import React from "react";
import {SearchFieldButton} from "../SearchFieldButton";
import {Flex} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const FilterFieldGenre = () => {
  const genres = useSelector(state => state.data.genresMovies)
  
  const handleGenre = (e) => {
    //  ....
  };

  return (
    <Flex flexWrap={"wrap"}>
      {genres && genres.map((genre, idx) => (
        <SearchFieldButton click={handleGenre} key={idx} text={genre.name} />
      ))}
    </Flex>
  );
};
