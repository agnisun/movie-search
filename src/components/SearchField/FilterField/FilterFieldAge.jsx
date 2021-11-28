import React from "react";
import {SearchFieldButton} from "../SearchFieldButton";
import {Flex} from "@chakra-ui/react";
import {useSelector} from "react-redux";

export const FilterFieldAge = ({ product }) => {
  const certification = useSelector((state) =>
    product === "movie"
      ? state.data.certificationMovies
      : state.data.certificationSerials
  );

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
