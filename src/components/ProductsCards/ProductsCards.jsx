import { Box, Container, Flex, Grid, Heading } from '@chakra-ui/react';
import { SearchField } from '../SearchField/SearchField';
import { Pagination } from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import {
  nextPageAction,
  prevPageAction,
  searchRequestAction,
} from '../../features/modules/search/search.actions';

export const ProductsCards = ({ product }) => {
  const dispatch = useDispatch();
  const title = product === 'movie' ? 'Movies' : 'Tv';
  const products = useSelector((state) => state.search.products.results);
  const sort = useSelector((state) => state.search.sort);
  const release = useSelector((state) => state.search.release);
  const genres = useSelector((state) => state.search.genres);
  const certification = useSelector((state) => state.search.certification);
  const totalPages = useSelector((state) => state.search.products.total_pages);
  const page = useSelector((state) => state.search.products.page);

  const handleNext = (currentPage) => {
    dispatch(nextPageAction());
    dispatch(
      searchRequestAction(
        product,
        sort,
        release,
        genres,
        certification,
        currentPage
      )
    );
  };

  const handlePrev = (currentPage) => {
    dispatch(prevPageAction());
    dispatch(
      searchRequestAction(
        product,
        sort,
        release,
        genres,
        certification,
        currentPage
      )
    );
  };

  return (
    <Box>
      <Container>
        <Heading py={'24px'}>{title}</Heading>
        <Flex
          w={'100%'}
          alignItems={{ base: 'center', '2md': 'flex-start' }}
          flexDir={{ base: 'column', '2md': 'row' }}
        >
          <SearchField product={product} />
          <Box flex={'1 1 auto'} w={{ base: '100%', '2md': 'auto' }}>
            <Grid
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              gap={'20px'}
              mb={'50px'}
            >
              {products &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </Grid>
            <Pagination
              nextAction={handleNext}
              prevAction={handlePrev}
              page={page}
              totalPages={totalPages}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
