import React, {useState} from "react";
import {Box, Checkbox, Flex, Stack,} from "@chakra-ui/react";
import {UpDownIcon} from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {SearchFieldTitle} from "./common/SearchFieldTitle";
import {SearchFieldButton} from "./common/SearchFieldButton";
import {openTab} from "../../core/openTab";
import {SearchFieldDate} from "./common/SearchFieldDate";

export const FilterField = () => {
  const [tab, setTab] = useState(false);
  const [ageFilter, setAgeFilter] = useState([]);
  const [genreFilter, setGenreFilter] = useState([]);
  const genres = useSelector((state) => state.data.genres);
  const dispatch = useDispatch();
  const certification = ["NR", "0+", "6+", "12+", "16+", "18+"];

  const handleAge = (e) => {
    const age = e.target.value;
    setAgeFilter([...ageFilter, age]);
  };

  const handleGenre = (e) => {
    const test = e.target.value;
    setGenreFilter([...genreFilter, test]);
  };

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
          <Flex flexWrap={"wrap"}>
            {genres.map((genre, idx) => (
              <SearchFieldButton
                click={handleGenre}
                key={idx}
                text={genre.name}
              />
            ))}
          </Flex>
        </Box>
        <Box mb={"10px"}>
          <SearchFieldTitle text={"Certification"} />
          <Flex flexWrap={"wrap"}>
            {certification.map((item, idx) => (
              <SearchFieldButton key={idx} click={handleAge} text={item} />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
