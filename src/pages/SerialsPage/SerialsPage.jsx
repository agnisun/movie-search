import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { ProductsCards } from '../../components/ProductsCards/ProductsCards';
import { useDispatch } from 'react-redux';
import { searchDefaultAction } from '../../features/modules/search/search.actions';

const SerialsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchDefaultAction('tv', 1));
  }, []);

  return (
    <Box
      minH={'100vh'}
      pt={{ base: '100px', '2md': '0' }}
      pl={{ base: '0', '2md': '56px' }}
      pb={'50px'}
    >
      <ProductsCards product={'tv'} />
    </Box>
  );
};

export default SerialsPage;
