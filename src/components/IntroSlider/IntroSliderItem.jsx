import React from "react";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { setRating } from "../../core/setRating";
import { formatOverview } from "../../core/formatOverview";
import { GenreInfo } from "../../common/GenreInfo";

export const IntroSliderItem = ({
  film: { title, overview, genre_ids, vote_average, backdrop_path },
}) => {
  const genres = useSelector((state) => state.movie.genres);
  const config = useSelector((state) => state.movie.config);
  const imageUrl = config && config.images.base_url;
  const imageSize = config && config.images.backdrop_sizes[3];

  return (
    <Box
      bg={`url(${imageUrl}${imageSize}${backdrop_path}) center / cover no-repeat`}
      minH={"80vh"}
      position={"relative"}
    >
      <Box maxW={"620px"} position={"absolute"} top={"168px"} left={"190px"}>
        <Stack
          alignItems={"flex-start"}
          spacing={"16px"}
          pb={"56px"}
          position={"relative"}
          minH={"416px"}
        >
          <GenreInfo genres={genres} genre_ids={genre_ids} />
          <Box>{setRating(vote_average)}</Box>
          <Heading fontSize={"56px"} lineHeight={"64px"}>
            {title}
          </Heading>
          <Text fontSize={"16px"} lineHeight={"32px"} fontWeight={"400"}>
            {formatOverview(overview)}
          </Text>
          <Button
            position={"absolute"}
            left={"0"}
            bottom={"0"}
            w={"200px"}
            height={"56px"}
            fontSize={"16px"}
            fontWeight={"400"}
            border={"1px solid rgba(225, 8, 86, 0.5);"}
            boxShadow={"0px 16px 16px 4px rgba(0, 0, 0, 0.12)"}
            borderRadius={"40px"}
            transition={"all .3s ease-in-out"}
            zIndex={15}
          >
            Watch now
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
