import React from "react";
import { Button } from "@chakra-ui/react";

export const SearchFieldButton = ({ text, click, status }) => {
  return (
    <Button
      variant={status ? "searchFieldActive" : "searchField"}
      m={"0 5px 5px 0"}
      value={text}
      onClick={click}
    >
      {text}
    </Button>
  );
};
