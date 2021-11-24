import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "../../slider/slider.css";
import { IntroSliderItem } from "./IntroSliderItem";
import { useSelector } from "react-redux";
import { settings } from "./sliderSettings";

export const IntroSlider = () => {
  const movies = useSelector((state) => state.data.movies.results);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    if (movies) {
      setPopular([movies[0], movies[1], movies[2]]);
    }
  }, [movies]);

  return (
    <Box as={"section"}>
      <Slider {...settings}>
        {popular.map((movie, idx) => (
          <IntroSliderItem key={idx} movie={movie} />
        ))}
      </Slider>
    </Box>
  );
};
