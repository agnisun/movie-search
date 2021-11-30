import {Box} from '@chakra-ui/react';

export const ProductBackground = ({ backdrop_path }) => {
  return (
    <Box
      zIndex={'1'}
      bg={
        backdrop_path
          ? 'linear-gradient(to right, rgba(7.84%, 8.63%, 11.37%, 1.00) 150px, rgba(7.84%, 8.63%, 11.37%, 0.84) 100%)'
          : '#22252a'
      }
      w={'100%'}
      h={'100%'}
      pos={'absolute'}
      top={'0'}
      left={'0'}
    />
  );
};
