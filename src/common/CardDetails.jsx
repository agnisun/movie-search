import React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { DragHandleIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { StarIcon } from "../theme/icons/StarIcon";

export const CardDetails = ({ id, title }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDetails = () => {
    dispatch({ type: "ADD_FAVOURITE", payload: id });

    toast({
      position: "top-right",
      title: "Success.",
      description: `${title} was added to your favourite list`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

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
        <MenuItem justifyContent={"center"} onClick={handleDetails}>
          <StarIcon color={"black"} />
          Favourite
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
