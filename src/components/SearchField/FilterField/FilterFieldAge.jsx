import React from "react";
import {SearchFieldButton} from "../SearchFieldButton";
import {Flex} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const FilterFieldAge = () => {
  const certification = useSelector((state) => state.data.certificationMovies);

  return (
    <Flex flexWrap={"wrap"}>
      {certification &&
        certification.US.sort((a, b) => a.order - b.order).map((item, idx) => (
          <SearchFieldButton
            key={idx}
            id={item.order}
            text={item.certification}
            variant={"age"}
          />
        ))}
    </Flex>
  );
};
