import React from "react";
import {Box, IconButton, Menu, MenuButton, MenuItem, MenuList, useToast,} from "@chakra-ui/react";
import {DragHandleIcon, StarIcon} from "@chakra-ui/icons";
import {addToFavourite} from "../core/addToFavourite";
import {useDispatch, useSelector} from "react-redux";
import {addFavouriteAction, removeFavouriteAction,} from "../features/modules/favourite/favourite.actions";
import {setStatusAction} from "../features/modules/product/product.actions";

export const CardDetails = ({ id, title }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const favouriteList = useSelector((state) => state.favourite.favouriteList);
  const isFavourite = favouriteList.indexOf(id) > -1 ? true : false;
  const colorVariant = isFavourite ? "red.500" : "black";

  const toggleFavourite = () => {
    if (!isFavourite) {
      dispatch(addFavouriteAction(id));
      localStorage.setItem(id, id);
    } else {
      dispatch(removeFavouriteAction(id));
      localStorage.removeItem(id);
    }

    dispatch(setStatusAction());
    addToFavourite(title, isFavourite, toast);
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
        <MenuItem justifyContent={"center"} onClick={toggleFavourite}>
          <StarIcon mr={"5px"} fontSize={"10px"} color={colorVariant} />
          <Box as={"span"}>Favourite</Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
