import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { ProductsCards } from '../../components/ProductsCards/ProductsCards';
import { searchDefaultAction } from '../../features/modules/search/search.actions';
import { useDispatch } from 'react-redux';

const MoviesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchDefaultAction('movie', 1));
  }, []);

  return (
    <Box
      minH={'100vh'}
      pt={{ base: '100px', '2md': '0' }}
      pl={{ base: '0', '2md': '56px' }}
      pb={'50px'}
    >
      <ProductsCards product={'movie'} />
    </Box>
  );
};

export default MoviesPage;
