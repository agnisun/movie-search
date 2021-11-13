import React, {useState} from "react";
import {Box, Flex, Select} from "@chakra-ui/react";
import {UpDownIcon} from "@chakra-ui/icons";
import {SearchFieldTitle} from "../SearchFieldTitle";
import {openTab} from "../../../core/openTab";

export const SortField = () => {
  const [tab, setTab] = useState(false);

  const handleTab = () => {
    openTab(setTab);
  };

  return (
    <Box p={"20px 15px"} bg={"#fff"} borderRadius={"10px"} mb={"20px"}>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={handleTab}
        cursor={"pointer"}
      >
        <Box as={"h4"}>Sort</Box>
        {<UpDownIcon />}
      </Flex>
      <Box d={tab ? "block" : "none"}>
        <SearchFieldTitle text={"Sort results by"} />
        <Select bg={"gray.400"}>
          <option value="PopularityDescending">Popularity descending</option>
          <option value="PopularityAscending">Popularity ascending</option>
          <option value="RatingDescending">Rating descending</option>
          <option value="RatingAscending">Rating ascending</option>
          <option value="ReleaseDescending">Release date descending</option>
          <option value="ReleaseAscending">Release date ascending</option>
          <option value="titleDescending">Title A-Z</option>
          <option value="titleAscending">Title Z-A</option>
        </Select>
      </Box>
    </Box>
  );
};
