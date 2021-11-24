import React from "react";
import { Flex, CircularProgress } from "@chakra-ui/react";

export const PageLoad = () => {
  return (
    <Flex bg={"black"} pl={"56px"} minH={"100vh"} w={"100%"} justifyContent={"center"} alignItems={"center"}>
      <CircularProgress thickness={"6px"} isIndeterminate />
    </Flex>
  );
};
