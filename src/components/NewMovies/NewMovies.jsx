import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { NewMovieItem } from "./NewMovieItem";
import { useSelector } from "react-redux";
import arrowRight from "../../assets/arrow-right.svg";
import { settings } from "./sliderSettings";
import { Link } from "react-router-dom";

export const NewMovies = () => {
  const movies = useSelector((state) => state.data.movies.results);

  return (
    <Box as={"section"}>
      <Box as={"h3"} fontSize={{ "2xl": "22px" }}>
        <Link to={"/movies"}>
          New releases <Image display={"inline-block"} src={arrowRight} />
        </Link>
      </Box>
      <Slider {...settings}>
        {movies &&
          movies.map((movie) => <NewMovieItem key={movie.id} movie={movie} />)}
      </Slider>
    </Box>
  );
};
