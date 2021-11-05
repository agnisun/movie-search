import React from "react";
import {Box, IconButton, Image} from "@chakra-ui/react";
import { setRating } from "../core/setRating";
import { formatTitle } from "../core/formatTitle";
import {RatedCircle} from "./RatedCircle";
import {DragHandleIcon} from "@chakra-ui/icons";

export const CardBodyDown = ({ vote_average, title, image, release_date }) => {
  return (
    <>
      <Box pos={"relative"}>
        <Image
          src={`http://image.tmdb.org/t/p/original${image}`}
          minH={"315px"}
        />
        <Box pos={"absolute"} bottom={"-25px"} left={"5px"} >
          <RatedCircle size={"45px"} value={vote_average}/>
        </Box>
      </Box>
      <Box m={"0"} color={"black"} p={"30px 15px 10px"}>
        <Box mb={"5px"}>{formatTitle(title)}</Box>
        <Box color={"grey"} fontSize={"14px"}>
          {release_date}
        </Box>
      </Box>
    </>
  );
};
