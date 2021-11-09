import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { formatDate } from "../../core/formatDate";
import { getGenres } from "../../core/getGenres";
import { getTime } from "../../core/getTime";
import { RatedCircle } from "../../common/RatedCircle";
import { PlayIcon } from "../../theme/icons/PlayIcon";
import { ProductModal } from "./ProductModal";
import { useSelector } from "react-redux";
import { addToFavourite } from "../../core/addToFavourite";
import { StarIcon } from "../../theme/icons/StarIcon";

export const ProductSubtitle = ({
  genres,
  vote_average,
  releaseDate,
  productRunTime,
  title,
}) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videos = useSelector((state) => state.product.videos);
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
    if (videos.id) {
      const finalTrailer = videos.results.filter(
        (el) => el.name.split(" ")[1] === "Trailer"
      )[0];
      setTrailer(finalTrailer);
    }
  }, [videos]);

  return (
    <>
      <Stack
        mb={"10px"}
        direction={"row"}
        spacing={"15px"}
        fontWeight={"400"}
        fontSize={"14px"}
        align={"center"}
        justifyContent={{ base: "center", "3md": "flex-start" }}
      >
        <Box>{formatDate(releaseDate)}</Box>
        <Box>{getGenres(genres)}</Box>
        {productRunTime && <Box>{getTime(productRunTime)}</Box>}
      </Stack>
      <Flex
        mb={"50px"}
        justifyContent={{
          base: "flex-start",
          sm: "center",
          "3md": "flex-start",
        }}
      >
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={"15px"}
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <Flex alignItems={"center"} pr={"10px"}>
            <RatedCircle
              value={vote_average}
              size={{ base: "50px", sm: "70px" }}
            />
            <Box ml={"10px"}>User score</Box>
          </Flex>
          <IconButton
            onClick={() => addToFavourite(title, toast)}
            variant={"circle"}
            aria-label="Add to favourite"
            icon={<StarIcon />}
          />
          {trailer && (
            <Flex
              as={"button"}
              onClick={onOpen}
              alignItems={"center"}
              _hover={{ opacity: "0.6" }}
            >
              <Box mr={"10px"}>Watch trailer</Box>
              <PlayIcon color={"#fff"} />
            </Flex>
          )}
        </Stack>
      </Flex>
      {trailer && (
        <ProductModal trailer={trailer} isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};