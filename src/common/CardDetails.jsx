import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import { StarIcon } from "../theme/icons/StarIcon";
import { addToFavourite } from "../core/addToFavourite";

export const CardDetails = ({ id, title }) => {
  const toast = useToast();

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        pos={"absolute"}
        zIndex={"5"}
        top={"5px"}
        right={"5px"}
        _hover={{ background: "blue.400" }}
        size="sm"
        borderRadius={"50%"}
        bg={"rgba(255, 255, 255, 0.3)"}
        icon={<DragHandleIcon />}
      />
      <MenuList
        fontSize={"16px"}
        minW={"150px"}
        color={"black"}
        pos={"absolute"}
        top={"0"}
        right={"-32px"}
      >
        <MenuItem
          justifyContent={"center"}
          onClick={() => addToFavourite(title, toast)}
        >
          <StarIcon color={"black"} />
          Favourite
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
