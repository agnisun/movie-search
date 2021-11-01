import React from "react";
import {Box, Image} from "@chakra-ui/react";
import Slider from "react-slick";
import {NewMovieItem} from "./NewMovieItem";
import {useSelector} from "react-redux";
import arrowRight from "../../assets/arrow-right.svg";
import {settings} from "./sliderSettings";

export const NewMovies = () => {
  const data = useSelector((state) => state.data.data.results);
  const newMovies = data && data.filter((movie, idx) => idx > 2 && idx < 18);

  return (
    <Box as={"section"}>
      <Box as={"h3"} fontSize={{ "2xl": "22px" }}>
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
