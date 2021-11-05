import React from "react";
import { useSelector } from "react-redux";
import { CardBodyDown } from "../../common/CardBodyDown";
import { GridItem } from "@chakra-ui/react";
import {CardDetails} from "../../common/CardDetails";

export const SerialsCard = ({
  movie: { name, vote_average, poster_path, genre_ids, first_air_date },
}) => {
  const genres = useSelector((state) => state.data.genres);

  return (
    <GridItem background={"white"} borderRadius={"10px"} overflow={"hidden"} pos={"relative"}>
      <CardBodyDown
        release_date={first_air_date}
        image={poster_path}
        title={name}
        vote_average={vote_average}
        genre_ids={genre_ids}
        genres={genres}
      />
      <CardDetails/>
    </GridItem>
  );
};
