import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { NewSerialItem } from "./NewSerialItem";
import arrowRight from "../../assets/arrow-right.svg";

export const NewSerials = () => {
  const dataSerials = useSelector((state) => state.movie.dataSerials.results);
  const newSerials = dataSerials && dataSerials.filter((film, idx) => idx < 10);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Box as={"section"}>
      <Box as={"h3"}>
        Featured TV shows <Image display={"inline-block"} src={arrowRight} />
      </Box>
      <Slider {...settings}>
        {newSerials &&
          newSerials.map((serial) => (
            <NewSerialItem key={serial.id} serial={serial} />
          ))}
      </Slider>
    </Box>
  );
};
