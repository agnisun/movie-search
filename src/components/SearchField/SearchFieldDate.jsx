import React, {useEffect, useState} from "react";
import {Box, Flex, Input} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {filterReleaseAction} from "../../features/modules/searchMovies/searchMovies.actions";
import {currentDate} from "../../core/currentDate";

export const SearchFieldDate = () => {
  const [date, setDate] = useState({from: "", to: currentDate(1)})
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(filterReleaseAction([date.from, date.to]))
  }, [date])
  
  return (
    <>
      <Flex alignItems={"center"}>
        <Box flexBasis={"60px"} fontSize={"12px"} fontWeight={"400"}>
        from
        </Box>
        <Input w={"100%"} type={"date"} onChange={(e) => setDate({...date, from: e.target.value})} />
      </Flex>
      
      <Flex alignItems={"center"}>
        <Box flexBasis={"60px"} fontSize={"12px"} fontWeight={"400"}>
          to
        </Box>
        <Input w={"100%"} type={"date"} value={date.to} onChange={(e) => setDate({...date, to: e.target.value})} />
      </Flex>
      </>
  );
};
