import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { SearchCards } from '../../components/SearchCards/SearchCards';
import { useHistory } from 'react-router-dom';
import { setSearchQueryAction } from '../../features/modules/singleSearch/singleSearch.actions';
import { useDispatch } from 'react-redux';

const SearchSerialPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname !== '/search/movie') {
        dispatch(setSearchQueryAction(''));
      }
    });
  }, [history]);

  return (
    <Box
      minH={'100vh'}
      pt={{ base: '100px', '2md': '0' }}
      pl={{ base: '0', '2md': '56px' }}
      pb={'50px'}
    >
      <SearchCards product={'tv'} />
    </Box>
  );
};

export default SearchSerialPage;
