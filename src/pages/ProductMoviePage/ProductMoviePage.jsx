import {useEffect} from 'react';
import {Box} from '@chakra-ui/react';
import {useHistory, useParams} from 'react-router-dom';
import {Product} from '../../components/Product/Product';
import {useDispatch, useSelector} from 'react-redux';
import {clearProductAction, productRequestAction,} from '../../features/modules/product/product.actions';
import {PageLoad} from '../../components/PageLoad/PageLoad';

export const ProductMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(productRequestAction(id, 'movie'));

    return history.listen(() => {
      dispatch(clearProductAction());
    });
  }, []);

  const movie = useSelector((state) => state.product.product);
  const isLoading = useSelector(state => state.product.loading);

  return (
    isLoading ? <PageLoad/> : (
      <Box minH={'100vh'}>
        <Product id={id} data={movie} />
      </Box>
    )
  );
};
