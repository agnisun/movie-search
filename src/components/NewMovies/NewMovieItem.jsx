import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CardBody } from "../../common/CardBody";
import { CardDetails } from "../../common/CardDetails";
import { Link } from "react-router-dom";

export const NewMovieItem = ({
  movie: { title, vote_average, poster_path, genre_ids, id },
}) => {
  const genres = useSelector((state) => state.data.genres);

  return (
    <Box position={"relative"} m={"0 10px 0 0"} h={"100%"}>
      <Link to={`/movies/${id}`}>
        <CardBody
          image={poster_path}
          title={title}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Link>
      <CardDetails />
    </Box>
  );
};
