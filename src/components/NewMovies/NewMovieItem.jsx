import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CardBody } from "../../common/CardBody";
import { CardDetails } from "../../common/CardDetails";
import { Link } from "react-router-dom";

export const NewMovieItem = ({
  movie: { title, vote_average, poster_path, genre_ids, id, isFavourite },
}) => {
  const genres = useSelector((state) => state.data.genresMovies);

  return (
    <Box
      position={"relative"}
      m={{ base: "0 5px", "2md": "0 10px 0 0" }}
      h={"100%"}
    >
      <Link to={`/movies/${id}`}>
        <CardBody
          image={poster_path}
          title={title}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Link>
      <CardDetails id={id} title={title} />
    </Box>
  );
};
