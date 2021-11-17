import React from "react";
import {Box, Image} from "@chakra-ui/react";
import Slider from "react-slick";
import {useSelector} from "react-redux";
import {NewSerialItem} from "./NewSerialItem";
import arrowRight from "../../assets/arrow-right.svg";
import {settings} from "./sliderSettings";
import {Link} from "react-router-dom";

export const NewSerials = () => {
  const serials = useSelector((state) => state.data.serials.results);
  const newSerials = serials && serials.filter((film, idx) => idx < 10);

  return (
    <Box as={"section"}>
      <Box as={"h3"} fontSize={{ "2xl": "22px" }}>
        <Link to={"/tv"}>
        Featured TV shows <Image display={"inline-block"} src={arrowRight} />
        </Link>
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
