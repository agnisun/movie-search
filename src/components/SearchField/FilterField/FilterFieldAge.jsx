import React from "react";
import { SearchFieldButton } from "../SearchFieldButton";
import { Flex } from "@chakra-ui/react";

export const FilterFieldAge = () => {
  const certification = ["NR", "0+", "6+", "12+", "16+", "18+"];

  const handleAge = () => {
    //...
  };

  return (
    <Flex flexWrap={"wrap"}>
      {certification.map((item, idx) => (
        <SearchFieldButton key={idx} click={handleAge} id={idx} text={item} />
      ))}
    </Flex>
  );
};
