import React from "react";
import { Box, CircularProgress } from "@chakra-ui/react";

export const PageLoad = () => {
  return (
    <Box pl={"56px"} minH={"100vh"} w={"100%"} h={"100%"}>
      <CircularProgress isIndeterminate />
    </Box>
  );
};
