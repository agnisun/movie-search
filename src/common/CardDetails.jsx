import React from 'react';
import {Box, IconButton} from "@chakra-ui/react";
import {DragHandleIcon} from "@chakra-ui/icons";
import {useDispatch} from "react-redux";

export const CardDetails = ({id}) => {
  const dispatch = useDispatch()
  const handleDetails = () => {
    dispatch({type: "ADD_FAVOURITE", payload: id})
  }
  
  return (
    <Box pos={"absolute"} zIndex={"5"} top={"5px"} right={"5px"}>
      <IconButton onClick={handleDetails} _hover={{background: "blue.400"}} size="sm" borderRadius={"50%"} bg={"rgba(255, 255, 255, 0.5)"} icon={<DragHandleIcon/>}/>
    </Box>
  );
};