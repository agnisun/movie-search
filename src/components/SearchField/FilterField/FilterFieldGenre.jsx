import React from "react";
import {SearchFieldButton} from "../SearchFieldButton";
import {Flex} from "@chakra-ui/react";

export const FilterFieldGenre = ({ genres }) => {
  const handleGenre = (e) => {
    //  ....
  };

  return (
    <Flex flexWrap={"wrap"}>
      {genres.map((genre, idx) => (
        <SearchFieldButton click={handleGenre} key={idx} text={genre.name} />
      ))}
    </Flex>
  );
};
