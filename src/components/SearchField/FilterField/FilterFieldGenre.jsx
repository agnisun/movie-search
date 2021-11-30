import {SearchFieldButton} from '../SearchFieldButton';
import {Flex} from '@chakra-ui/react';
import {useSelector} from 'react-redux';

export const FilterFieldGenre = ({ product }) => {
  const genres = useSelector((state) =>
    product === 'movie' ? state.data.genresMovies : state.data.genresSerials
  );

  return (
    <Flex flexWrap={'wrap'}>
      {genres &&
        genres.map((genre) => (
          <SearchFieldButton
            key={genre.id}
            text={genre.name}
            id={genre.id}
            variant={'genres'}
          />
        ))}
    </Flex>
  );
};
