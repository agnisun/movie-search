import React from "react";
import { useSelector } from "react-redux";
import { CardBodyDown } from "../../common/CardBodyDown";
import { GridItem } from "@chakra-ui/react";
import { CardDetails } from "../../common/CardDetails";
import { Link } from "react-router-dom";

export const SerialsCard = ({
  data: { name, vote_average, poster_path, genre_ids, first_air_date, id },
}) => {
  const genres = useSelector((state) => state.data.genres);

  return (
    <GridItem
      background={"white"}
      borderRadius={"10px"}
      overflow={"hidden"}
      pos={"relative"}
    >
      <Link to={`tv/${id}`}>
        <CardBodyDown
          release_date={first_air_date}
          image={poster_path}
          title={name}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Link>
      <CardDetails title={name} id={id} />
    </GridItem>
  );
};
