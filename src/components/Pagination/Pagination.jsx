import {Box, Flex, IconButton} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';

export const Pagination = ({ nextAction, prevAction, page, totalPages }) => {
  const handleNextPage = () => {
    let currentPage = page;

    if (currentPage < totalPages) {
      window.scrollTo(0, 0);
      currentPage += 1;

      nextAction(currentPage);
    }
  };

  const handlePrevPage = () => {
    let currentPage = page;

    if (currentPage > 1) {
      window.scrollTo(0, 0);
      currentPage -= 1;
      prevAction(currentPage);
    }
  };

  return totalPages !== 0 ? (
    <Flex justifyContent={'center'}>
      <IconButton
        disabled={page <= 1}
        onClick={handlePrevPage}
        colorScheme={'blue'}
        aria-label={'prev-page'}
        icon={<ChevronLeftIcon />}
      />
      <Flex mx={'15px'} alignItems={'center'}>
        <Box>
          {page} / {totalPages}
        </Box>
      </Flex>
      <IconButton
        disabled={page >= totalPages}
        onClick={handleNextPage}
        colorScheme={'blue'}
        aria-label={'next-page'}
        icon={<ChevronRightIcon />}
      />
    </Flex>
  ) : null;
};
