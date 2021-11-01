import React from "react";
import {Box, Image, Stack} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import home from "../../assets/home.svg";
import movies from "../../assets/movies.svg";
import serials from "../../assets/serials.svg";
import star from "../../assets/star.svg";
import {Link} from "react-router-dom";

export const NavBar = () => {
  return (
    <Box
      overflowX={"hidden"}
      zIndex={"9"}
      top={"0"}
      left={"0"}
      position={"absolute"}
      w={"56px"}
      h={"100%"}
      backdropFilter={"blur(24px)"}
      background={"rgba(29, 29, 29, 0.5)"}
      boxShadow={"0px 40px 40px 8px rgba(0, 0, 0, 0.16)"}
    >
      <Stack alignItems={"center"} py={"40px"} spacing={"90px"}>
        <Box px={"5px"}>
          <Image src={logo} />
        </Box>
        <Box p={"8px"}>
          <Link to={"/"}>
            <Image src={home} />
          </Link>
        </Box>
        <Box p={"8px"}>
          <Link to={"/movies"}>
            <Image src={movies} />
          </Link>
        </Box>
        <Box p={"8px"}>
          <Image src={serials} />
        </Box>
        <Box p={"8px"}>
          <Image src={star} />
        </Box>
      </Stack>
    </Box>
  );
};
