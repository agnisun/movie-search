import React from "react";
import {Box, Container, Flex, Grid, Heading} from "@chakra-ui/react";
import {SearchField} from "../SearchField/SearchField";
import {useSelector} from "react-redux";
import {SerialsCard} from "./SerialsCard";

export const SerialsCards = () => {
  const serialsData = useSelector((state) => state.data.serials.results);
  const genres = useSelector((state) => state.data.genresSerials);
  const serials = serialsData && serialsData.filter((serial, idx) => idx < 60);

  return (
    <Box>
      <Container>
        <Heading py={"24px"}>TV Shows</Heading>
        <Flex
          w={"100%"}
          alignItems={{base: "center", "2md": "flex-start"}}
          flexDir={{ base: "column", "2md": "row" }}
        >
          <SearchField genres={genres} />
          <Grid
            flex={"1 1 auto"}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={"20px"}
          >
            {serials &&
              serials.map((serial) => (
                <SerialsCard key={serial.id} data={serial} />
              ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
