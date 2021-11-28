import React from "react";
import {Box, Heading, Stack} from "@chakra-ui/react";
import {getYear} from "../../core/getYear";

export const ProductTitle = ({ title, release_date }) => {
  return (
    <Stack mb={"5px"} textAlign={{ base: "center", "3md": "left" }}>
      <Heading fontSize={{ base: "26px", "3md": "33px" }}>
        {title}
        <Box fontWeight={"400"} opacity={"0.7"} as={"span"}>
          {getYear(release_date)}
        </Box>
      </Heading>
    </Stack>
  );
};
