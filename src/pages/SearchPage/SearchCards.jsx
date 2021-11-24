import React from "react";
import { Container, Grid, Heading } from "@chakra-ui/react";

export const SearchCards = () => {
  return (
    <Container>
      <Heading py={"24px"}>Search</Heading>
      {/*Search for a movie or tv show в инпут*/}
      <Grid
        flex={"1 1 auto"}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={"20px"}
      >
        Test
      </Grid>
    </Container>
  );
};
