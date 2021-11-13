import React from "react";
import {GridItem} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {CardBodyDown} from "../../common/CardBodyDown";
import {Link} from "react-router-dom";
import {CardDetails} from "../../common/CardDetails";

export const MovieCard = ({
  movie: { title, vote_average, poster_path, genre_ids, release_date, id },
}) => {
  const genres = useSelector((state) => state.data.genresMovies);

  return (
    <GridItem
      background={"white"}
      borderRadius={"10px"}
      overflow={"hidden"}
      pos={"relative"}
    >
      <Link to={`/movies/${id}`}>
        <CardBodyDown
          release_date={release_date}
          image={poster_path}
          title={title}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Link>
      <CardDetails title={title} id={id} />
    </GridItem>
  );
};
