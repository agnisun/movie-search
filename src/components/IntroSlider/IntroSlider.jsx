import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import "../../slider/slider.css";
import { IntroSliderItem } from "./IntroSliderItem";
import { useSelector } from "react-redux";

export const IntroSlider = () => {
  const data = useSelector((state) => state.data.data.results);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    if (data) {
      setPopular([data[0], data[1], data[2]]);
    }
  }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <Box as={"section"}>
      <Slider {...settings}>
        {popular.map((film, idx) => (
          <IntroSliderItem key={idx} film={film} />
        ))}
      </Slider>
    </Box>
  );
};
