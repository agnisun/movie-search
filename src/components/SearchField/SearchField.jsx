import {Box, Button} from '@chakra-ui/react';
import {SortField} from './SortField/SortField';
import {FilterField} from './FilterField/FilterField';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequestAction} from '../../features/modules/search/search.actions';

export const SearchField = ({ product }) => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.search.sort);
  const release = useSelector((state) => state.search.release);
  const genres = useSelector((state) => state.search.genres);
  const certification = useSelector((state) => state.search.certification);
  const isChanging = useSelector((state) => state.search.changing);

  const handleSearch = () => {
    window.scrollTo(0, 0);
    dispatch(
      searchRequestAction(product, 1, sort, release, genres, certification)
    );
  };

  return (
    <Box
      minW={{ base: '100%', '2md': '260px' }}
      w={{ base: '100%', '2md': '260px' }}
      color={'black'}
      mr={{ base: '0', '2md': '30px' }}
      mb={{ base: '50px', '2md': '0' }}
    >
      <SortField />
      <FilterField product={product} />
      <Button
        disabled={!isChanging}
        onClick={handleSearch}
        colorScheme={'blue'}
        w={'100%'}
      >
        Search
      </Button>
    </Box>
  );
};
