import React from "react";
import {Box, Flex, Input} from "@chakra-ui/react";

export const SearchFieldDate = ({ text }) => {
  return (
    <Flex alignItems={"center"}>
      <Box flexBasis={"60px"} fontSize={"12px"} fontWeight={"400"}>
        {text}
      </Box>
      <Input w={"100%"} type={"date"} />
    </Flex>
  );
};
