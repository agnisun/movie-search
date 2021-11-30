import {GenreInfo} from './GenreInfo';
import {Box, Image, Stack} from '@chakra-ui/react';
import {setRating} from '../core/setRating';
import {formatTitle} from '../core/formatTitle';
import noImage from '../assets/no-image.png';
import {useSelector} from 'react-redux';

export const CardBody = ({ genres, genre_ids, vote_average, title, image }) => {
  const config = useSelector((state) => state.data.config);
  const imageUrl = config && config.images.base_url;

  return (
    <>
      {image ? (
        <Image
          w={'100%'}
          h={{ base: '275px', sm: '370px', '3md': '470px' }}
          src={`${imageUrl}w300${image}`}
        />
      ) : (
        <Image
          src={noImage}
          alt={''}
          h={{ base: '280px', sm: '370px', '3md': '470px' }}
        />
      )}
      <Stack
        pointerEvents={'none'}
        background={
          'linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%)'
        }
        w={'100%'}
        pos={'absolute'}
        bottom={'0'}
        left={'0'}
        alignItems={'flex-start'}
        justifyContent={'flex-end'}
        h={'70%'}
        p={{ base: '16px' }}
      >
        <GenreInfo genres={genres} genre_ids={genre_ids} />
        <Box fontSize={{ base: '12px', md: '16px', '2xl': '20px' }}>
          {setRating(vote_average)}
        </Box>
        <Box fontSize={{ base: '16px', md: '18px', '2xl': '24px' }}>
          {formatTitle(title)}
        </Box>
      </Stack>
    </>
  );
};
