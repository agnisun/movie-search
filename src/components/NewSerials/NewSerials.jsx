import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { NewSerialItem } from "./NewSerialItem";
import arrowRight from "../../assets/arrow-right.svg";
import { settings } from "./sliderSettings";

export const NewSerials = () => {
  const dataSerials = useSelector((state) => state.data.serials.results);
  const newSerials = dataSerials && dataSerials.filter((film, idx) => idx < 10);

  return (
    <Box as={"section"}>
      <Box as={"h3"} fontSize={{ "2xl": "22px" }}>
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
