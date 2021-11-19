import React from "react";
import {SearchFieldButton} from "../SearchFieldButton";
import {Flex} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const FilterFieldGenre = () => {
  const genres = useSelector((state) => state.data.genresMovies);

  return (
    <Flex flexWrap={"wrap"}>
      {genres &&
        genres.map((genre) => (
          <SearchFieldButton
            key={genre.id}
            text={genre.name}
            id={genre.id}
            variant={"genres"}
          />
        ))}
    </Flex>
  );
};
