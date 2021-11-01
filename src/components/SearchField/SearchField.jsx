import React from "react";
import {Box, Button} from "@chakra-ui/react";
import {SortField} from "./SortField";
import {FilterField} from "./FilterField";

export const SearchField = () => {
  return (
    <Box minW={{base: "100%", "2md": "260px"}} w={{base: "100%", "2md": "260px"}} color={"black"} mr={"30px"} mb={{base: "50px", "2md": "0"}}>
      <SortField />
      <FilterField />
      <Button colorScheme={"blue"} w={"100%"}>
        Search
      </Button>
    </Box>
  );
};
