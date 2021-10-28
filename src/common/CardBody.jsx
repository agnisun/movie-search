import React from "react";
import { GenreInfo } from "./GenreInfo";
import { Box, Image, Stack } from "@chakra-ui/react";
import { setRating } from "../core/setRating";
import { formatTitle } from "../core/formatTitle";

export const CardBody = ({ genres, genre_ids, vote_average, title, image }) => {
  return (
    <>
      <Image src={`http://image.tmdb.org/t/p/original${image}`} />
      <Stack
        background={
          "linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,05) 100%)"
        }
        w={"100%"}
        pos={"absolute"}
        bottom={"0"}
        left={"0"}
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
        h={"70%"}
        p={"24px"}
      >
        <GenreInfo genres={genres} genre_ids={genre_ids} />
        <Box fontSize={"16px"}>{setRating(vote_average)}</Box>
        <Box fontSize={"24px"} lineHeight={"32px"}>
          {formatTitle(title)}
        </Box>
      </Stack>
    </>
  );
};
