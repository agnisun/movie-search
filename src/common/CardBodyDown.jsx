import React from "react";
import {Box, Image} from "@chakra-ui/react";
import {setRating} from "../core/setRating";
import {formatTitle} from "../core/formatTitle";

export const CardBodyDown = ({ vote_average, title, image, release_date }) => {
  return (
    <>
      <Image src={`http://image.tmdb.org/t/p/original${image}`} />
      <Box m={"0"} color={"black"} p={"5px 15px 10px"}>
        <Box fontSize={"14px"}>{setRating(vote_average)}</Box>
        <Box mb={"5px"}>{formatTitle(title)}</Box>
        <Box color={"grey"} fontSize={"14px"}>
          {release_date}
        </Box>
      </Box>
    </>
  );
};
