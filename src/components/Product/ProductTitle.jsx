import React from "react";
import { Box, Heading, HStack, IconButton } from "@chakra-ui/react";
import { StarIcon } from "../../theme/icons/StarIcon";
import { getYear } from "../../core/getYear";

export const ProductTitle = ({ title, release_date }) => {
  return (
    <HStack spacing={"30px"} mb={"5px"}>
      <Heading fontSize={"33px"}>
        {title}
        <Box fontWeight={"400"} opacity={"0.7"} as={"span"}>
          {getYear(release_date)}
        </Box>
      </Heading>
      <IconButton
        variant={"circle"}
        aria-label="Add to favourite"
        icon={<StarIcon />}
      />
    </HStack>
  );
};
