import React from "react";
import { Link } from "react-router-dom";
import { CardBodyDown } from "../../common/CardBodyDown";
import { CardDetails } from "../../common/CardDetails";
import { GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const FavouriteCard = ({
  product: {
    id,
    release_date,
    poster_path,
    title,
    name,
    genre_ids,
    vote_average,
    first_air_date,
  },
  product,
  setFavourites,
}) => {
  const genres = useSelector((state) => state.data.genresSerials);
  const releaseDate = first_air_date ? first_air_date : release_date;
  const productTitle = name ? name : title;

  return (
    <GridItem
      background={"white"}
      borderRadius={"10px"}
      overflow={"hidden"}
      pos={"relative"}
    >
      <Link to={`/${name ? "tv" : "movie"}/${id}`}>
        <CardBodyDown
          release_date={releaseDate}
          image={poster_path}
          title={productTitle}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Link>
      <CardDetails setFavourites={setFavourites} product={product} />
    </GridItem>
  );
};
