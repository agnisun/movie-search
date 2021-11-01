import React from "react";
import {GridItem} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {CardBodyDown} from "../../common/CardBodyDown";

export const MovieCard = ({
  movie: { title, vote_average, poster_path, genre_ids, release_date },
}) => {
  const genres = useSelector((state) => state.data.genres);

  return (
    <GridItem background={"white"} borderRadius={"10px"} overflow={"hidden"}>
      <CardBodyDown
        release_date={release_date}
        image={poster_path}
        title={title}
        vote_average={vote_average}
        genre_ids={genre_ids}
        genres={genres}
      />
    </GridItem>
  );
};
