import React, { useState } from "react";
import { Box, Checkbox, Flex, Stack } from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";
import { SearchFieldTitle } from "../SearchFieldTitle";
import { openTab } from "../../../core/openTab";
import { SearchFieldDate } from "../SearchFieldDate";
import { FilterFieldAge } from "./FilterFieldAge";
import { FilterFieldGenre } from "./FilterFieldGenre";

export const FilterField = () => {
  const [tab, setTab] = useState(false);

  const handleTab = () => {
    openTab(setTab);
  };

  return (
    <Box p={"20px 15px"} bg={"#fff"} borderRadius={"10px"} mb={"50px"}>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={handleTab}
        cursor={"pointer"}
      >
        <Box as={"h4"}>Filter</Box>
        {<UpDownIcon />}
      </Flex>
      <Box d={tab ? "block" : "none"}>
        <Box mb={"10px"}>
          <SearchFieldTitle text={"Release dates"} />
          <Checkbox mb={"10px"} defaultIsChecked>
            Search all releases?
          </Checkbox>
          <Stack dir={"column"}>
            <SearchFieldDate text={"from"} />
            <SearchFieldDate text={"to"} />
          </Stack>
        </Box>
        <Box>
          <SearchFieldTitle text={"Genres"} />
          <FilterFieldGenre />
        </Box>
        <Box mb={"10px"}>
          <SearchFieldTitle text={"Certification"} />
          <FilterFieldAge />
        </Box>
      </Box>
    </Box>
  );
};
