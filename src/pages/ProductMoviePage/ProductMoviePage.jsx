import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Product } from "../../components/Product/Product";

export const ProductMoviePage = () => {
  const { id } = useParams();
  const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  console.log(movie);

  return (
    <Box
      minH={"100vh"}
      bg={
        movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}) center / cover no-repeat`
          : "none"
      }
      pos={"relative"}
    >
      <Box
        zIndex={"1"}
        bg={"rgba(0, 0, 0, 0.8)"}
        w={"100%"}
        h={"100%"}
        pos={"absolute"}
        top={"0"}
        left={"0"}
      />
      <Product id={id} data={movie} />
    </Box>
  );
};
