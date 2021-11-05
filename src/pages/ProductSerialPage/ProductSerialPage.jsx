import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Product } from "../../components/Product/Product";

export const ProductSerialPage = () => {
  const { id } = useParams();
  const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";
  const [serial, setSerial] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setSerial(data));
  }, []);

  console.log(serial);

  return (
    <Box
      minH={"100vh"}
      bg={
        serial.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original/${serial.backdrop_path}) center / cover no-repeat`
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
      <Product id={id} data={serial} />
    </Box>
  );
};
