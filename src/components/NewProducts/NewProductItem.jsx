import React from "react";
import { Link } from "react-router-dom";
import { CardBody } from "../../common/CardBody";
import { CardDetails } from "../../common/CardDetails";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const NewProductItem = ({
  product,
  data: { id, poster_path, name, title, vote_average, genre_ids },
  data,
}) => {
  const genres = useSelector((state) =>
    product === "movie" ? state.data.genresMovies : state.data.genresSerials
  );
  const productTitle = name ? name : title;

  return (
    <Box
      position={"relative"}
      m={{ base: "0 5px", "2md": "0 10px 0 0" }}
      h={"100%"}
    >
      <Link to={`${product}/${id}`}>
        <CardBody
          image={poster_path}
          title={productTitle}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Link>
      <CardDetails product={data} />
    </Box>
  );
};
