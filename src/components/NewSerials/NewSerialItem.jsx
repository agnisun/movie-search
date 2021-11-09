import React from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CardBody } from "../../common/CardBody";
import { CardDetails } from "../../common/CardDetails";
import { Link } from "react-router-dom";

export const NewSerialItem = ({
  serial: { name, vote_average, genre_ids, poster_path, id },
}) => {
  const genres = useSelector((state) => state.data.genresSerials);

  return (
    <Box position={"relative"}>
      <Link to={`tv/${id}`}>
        <CardBody
          image={poster_path}
          title={name}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Link>
      <CardDetails id={id} title={name} />
    </Box>
  );
};
