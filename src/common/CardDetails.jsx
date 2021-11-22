import React from "react";
import {Box, IconButton, Menu, MenuButton, MenuItem, MenuList, useToast,} from "@chakra-ui/react";
import {DragHandleIcon, StarIcon} from "@chakra-ui/icons";
import {useDispatch} from "react-redux";
import {setStatusAction} from "../features/modules/product/product.actions";
import {toggleFavourite} from "../core/toggleFavourite";

export const CardDetails = ({ product,setFavourites }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const isFavourite = window.localStorage.getItem(product.id) ? true : false;
  const productTitle = product.name ? product.name : product.title;
  const colorVariant = isFavourite ? "red.500" : "black";
  const setStatus = () => dispatch(setStatusAction())
  
  const handleFavourite = () => {
    toggleFavourite(product, setStatus, isFavourite, productTitle, toast, setFavourites)
  }
  
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
        <MenuItem justifyContent={"center"} onClick={handleFavourite}>
          <StarIcon mr={"5px"} fontSize={"10px"} color={colorVariant} />
          <Box as={"span"}>Favourite</Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
