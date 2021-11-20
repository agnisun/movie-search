import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  nextPageAction,
  prevPageAction,
  searchRequestAction,
} from "../../features/modules/search/search.actions";
import { useDispatch, useSelector } from "react-redux";

export const Pagination = ({ product }) => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.search.sort);
  const release = useSelector((state) => state.search.release);
  const genres = useSelector((state) => state.search.genres);
  const certification = useSelector((state) => state.search.certification);
  const totalPages = useSelector((state) => state.search.products.total_pages);
  const page = useSelector((state) => state.search.products.page);

  const handleNextPage = () => {
    let currentPage = page;

    if (currentPage < totalPages) {
      window.scrollTo(0, 0);
      currentPage += 1;
      dispatch(nextPageAction(currentPage));
      dispatch(
        searchRequestAction(
          product,
          sort,
          release,
          genres,
          certification,
          currentPage
        )
      );
    }
  };

  const handlePrevPage = () => {
    let currentPage = page;

    if (currentPage > 1) {
      window.scrollTo(0, 0);
      currentPage -= 1;
      dispatch(prevPageAction(currentPage));
      dispatch(
        searchRequestAction(
          product,
          sort,
          release,
          genres,
          certification,
          currentPage
        )
      );
    }
  };

  return (
    <Flex justifyContent={"center"}>
      <IconButton
        disabled={page <= 1}
        onClick={handlePrevPage}
        colorScheme={"blue"}
        aria-label={"prev-page"}
        icon={<ChevronLeftIcon />}
      />
      <Flex mx={"15px"} alignItems={"center"}>
        <Box>
          {page} / {totalPages}
        </Box>
      </Flex>
      <IconButton
        disabled={page >= totalPages}
        onClick={handleNextPage}
        colorScheme={"blue"}
        aria-label={"next-page"}
        icon={<ChevronRightIcon />}
      />
    </Flex>
  );
};
