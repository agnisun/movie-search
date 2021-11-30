import {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import {ProductsCards} from '../../components/ProductsCards/ProductsCards';
import {useDispatch, useSelector} from 'react-redux';
import {searchDefaultRequestAction} from '../../features/modules/search/search.actions';
import {PageLoad} from '../../components/PageLoad/PageLoad';

export const SerialsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.search.loading);
  
  useEffect(() => {
    dispatch(searchDefaultRequestAction('tv', 1));
  }, []);

  return (
    isLoading ? <PageLoad/> : (
      <Box
        minH={'100vh'}
        pt={{ base: '100px', '2md': '0' }}
        pl={{ base: '0', '2md': '56px' }}
        pb={'50px'}
      >
        <ProductsCards product={'tv'} />
      </Box>
    )
  );
};
