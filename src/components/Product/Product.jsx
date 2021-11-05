import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Stack, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {RatedCircle} from "../../common/RatedCircle";
import {PlayIcon} from "../../theme/icons/PlayIcon";
import {ProductTitle} from "./ProductTitle";
import {getTime} from "../../core/getTime";
import {formatDate} from "../../core/formatDate";
import {getGenres} from "../../core/getGenres";

export const Product = ({data: {title, release_date, genres, runtime, poster_path, overview, vote_average, tagline}, id}) => {
  // const [video, setVideos] = useState({})
  // const API_KEY = "44fdd1155b4c53983e30b1f7090adf5d";
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  //     .then(response =>response.json())
  //     .then(videos => setVideos(videos))
  // }, [])
  // console.log(video)
  
  return (
    <Box pl={{ base: "0", "2md": "56px" }} pt={"160px"}>
      <Container pos={"relative"} zIndex={"2"}>
        <Flex justifyContent={"center"}>
          <Image borderRadius={"10px"} minW={"300px"} w={"300px"} h={"450px"} src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'none'}/>
          <Box p={"10px 0 10px 30px"}>
            <ProductTitle title={title} release_date={release_date}/>
            <Box mb={"10px"} fontWeight={"400"}>{tagline}</Box>
            <Stack mb={"10px"} direction={"row"} spacing={"15px"} fontWeight={"400"} fontSize={"14px"}>
              <Box>{formatDate(release_date)}</Box>
              <Box>{getGenres(genres)}</Box>
              <Box>{getTime(runtime)}</Box>
            </Stack>
            <Flex mb={"50px"}>
              <HStack spacing={"15px"} alignItems={"center"}>
                <Flex alignItems={"center"} pr={"20px"}>
                  <RatedCircle value={vote_average} size={"70px"}/>
                  <Box ml={"10px"}>User score</Box>
                </Flex>
                <Flex alignItems={"center"} _hover={{opacity: "0.6"}} cursor={"pointer"}>
                  <Box mr={"10px"}>Watch trailer</Box>
                  <PlayIcon color={"#fff"}/>
                </Flex>
              </HStack>
            </Flex>
            <Box>
              <Box fontSize={"24px"} mb={"10px"}>Overview</Box>
              <Text fontWeight={"400"}>{overview}</Text>
            </Box>
          </Box>
        </Flex>
        <Button colorScheme={"blue"}>
          <Link to={'/movies'}>back</Link>
        </Button>
      </Container>
    </Box>
  );
};