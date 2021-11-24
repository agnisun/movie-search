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
import { useDispatch, useSelector } from "react-redux";
import { StarIcon } from "@chakra-ui/icons";
import { getContentRaiting } from "../../core/getContentRaiting";
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from "../../features/modules/favourite/favourite.actions";
import { addToFavourite } from "../../core/addToFavourite";

export const ProductSubtitle = ({
  genres,
  vote_average,
  releaseDate,
  productRunTime,
  productTitle,
  id,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [trailer, setTrailer] = useState({});
  const favouriteList = useSelector((state) => state.favourite.favouriteList);
  const isFavourite =
    favouriteList && favouriteList.findIndex((movie) => movie.id === id) !== -1;
  const product = useSelector((state) => state.product.product);
  const videos = useSelector((state) => state.product.videos);
  const buttonVariant = !isFavourite ? "circle" : "circleActive";
  const contentRaiting = useSelector(
    (state) => state.product.content_raiting.results
  );

  useEffect(() => {
    if (videos.id) {
      const finalTrailer = videos.results.filter(
        (el) => el.name.split(" ")[1] === "Trailer"
      )[0];
      setTrailer(finalTrailer);
    }
  }, [videos]);

  const handleFavourite = () => {
    if (!isFavourite) {
      dispatch(addToFavouriteAction(product));
    } else {
      dispatch(removeFromFavouriteAction(id));
    }

    addToFavourite(productTitle, isFavourite, toast);
  };

  return (
    <>
      <Stack
        mb={"10px"}
        direction={"row"}
        spacing={"15px"}
        fontWeight={"400"}
        fontSize={"14px"}
        align={"center"}
        flexWrap={"wrap"}
        justifyContent={{ base: "center", "3md": "flex-start" }}
      >
        {getContentRaiting(contentRaiting, "US") && (
          <Box opacity={"0.6"} p={"3px"} border={"1px solid white"}>
            {getContentRaiting(contentRaiting, "US")}
          </Box>
        )}
        {formatDate(releaseDate) && <Box>{formatDate(releaseDate)}</Box>}
        {getGenres(genres) && <Box>{getGenres(genres)}</Box>}
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
            onClick={handleFavourite}
            variant={buttonVariant}
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
