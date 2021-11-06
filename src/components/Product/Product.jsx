import React from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RatedCircle } from "../../common/RatedCircle";
import { PlayIcon } from "../../theme/icons/PlayIcon";
import { ProductTitle } from "./ProductTitle";
import { getTime } from "../../core/getTime";
import { formatDate } from "../../core/formatDate";
import { getGenres } from "../../core/getGenres";

export const Product = ({
  data: {
    title,
    release_date,
    genres,
    runtime,
    poster_path,
    overview,
    vote_average,
    tagline,
    first_air_date,
    name,
    episode_run_time,
  },
  id,
}) => {
  const releaseDate = first_air_date ? first_air_date : release_date;
  const productName = name ? name : title;
  const productRunTime = episode_run_time ? episode_run_time[0] : runtime;
  const productOverview = overview ? overview : "No description";

  return (
    <Box pl={{ base: "0", "2md": "56px" }} pt={"160px"}>
      <Container pos={"relative"} zIndex={"2"}>
        <Flex justifyContent={"center"}>
          <Image
            borderRadius={"10px"}
            minW={"300px"}
            w={"300px"}
            h={"450px"}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : "none"
            }
          />
          <Box p={"10px 0 10px 30px"}>
            <ProductTitle title={productName} release_date={releaseDate} />
            <Box mb={"10px"} fontWeight={"400"}>
              {tagline}
            </Box>
            <Stack
              mb={"10px"}
              direction={"row"}
              spacing={"15px"}
              fontWeight={"400"}
              fontSize={"14px"}
            >
              <Box>{formatDate(releaseDate)}</Box>
              <Box>{getGenres(genres)}</Box>
              <Box>{getTime(productRunTime)}</Box>
            </Stack>
            <Flex mb={"50px"}>
              <HStack spacing={"15px"} alignItems={"center"}>
                <Flex alignItems={"center"} pr={"20px"}>
                  <RatedCircle value={vote_average} size={"70px"} />
                  <Box ml={"10px"}>User score</Box>
                </Flex>
                <Flex
                  alignItems={"center"}
                  _hover={{ opacity: "0.6" }}
                  cursor={"pointer"}
                >
                  <Box mr={"10px"}>Watch trailer</Box>
                  <PlayIcon color={"#fff"} />
                </Flex>
              </HStack>
            </Flex>
            <Box>
              <Box fontSize={"24px"} mb={"10px"}>
                Overview
              </Box>
              <Text fontWeight={"400"}>{productOverview}</Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
