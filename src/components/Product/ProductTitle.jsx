import React from "react";
import { Box, Heading, HStack, IconButton, useToast } from "@chakra-ui/react";
import { StarIcon } from "../../theme/icons/StarIcon";
import { getYear } from "../../core/getYear";
import { addToFavourite } from "../../core/addToFavourite";

export const ProductTitle = ({ title, release_date }) => {
  const toast = useToast();

  return (
    <HStack spacing={"30px"} mb={"5px"}>
      <Heading fontSize={"33px"}>
        {title}
        <Box fontWeight={"400"} opacity={"0.7"} as={"span"}>
          {getYear(release_date)}
        </Box>
      </Heading>
      <IconButton
        onClick={() => addToFavourite(title, toast)}
        variant={"circle"}
        aria-label="Add to favourite"
        icon={<StarIcon />}
      />
    </HStack>
  );
};
