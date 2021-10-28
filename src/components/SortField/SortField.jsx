import React from "react";
import { Box, Select } from "@chakra-ui/react";

export const SortField = () => {
  return (
    <Box
      minW={"260px"}
      w={"260px"}
      bg={"#fff"}
      h={"300px"}
      color={"black"}
      borderRadius={"10px"}
      mr={"30px"}
      p={"20px 15px"}
    >
      <Box>Сортировать</Box>
      <Select bg={"gray.400"} placeholder="Option1" />
    </Box>
  );
};
