import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { NewMovieItem } from "./NewMovieItem";
import { useSelector } from "react-redux";
import arrowRight from "../../assets/arrow-right.svg";

export const NewMovies = () => {
  const data = useSelector((state) => state.movie.data.results);
  const newMovies = data && data.filter((movie, idx) => idx > 2 && idx < 18);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <Box as={"section"}>
      <Box as={"h3"}>
        New releases <Image display={"inline-block"} src={arrowRight} />
      </Box>
      <Slider {...settings}>
        {data &&
          newMovies.map((movie) => (
            <NewMovieItem key={movie.id} movie={movie} />
          ))}
      </Slider>
    </Box>
  );
};
