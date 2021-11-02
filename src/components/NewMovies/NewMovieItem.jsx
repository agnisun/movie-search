import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CardBody } from "../../common/CardBody";

export const NewMovieItem = ({
  movie: { title, vote_average, poster_path, genre_ids },
}) => {
  const genres = useSelector((state) => state.data.genres);

  return (
    <Box position={"relative"} m={"0 10px 0 0"}>
      <CardBody
        image={poster_path}
        title={title}
        vote_average={vote_average}
        genre_ids={genre_ids}
        genres={genres}
      />
    </Box>
  );
};
