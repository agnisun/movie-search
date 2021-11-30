import {Link} from 'react-router-dom';
import {CardBodyDown} from '../../common/CardBodyDown';
import {CardDetails} from '../../common/CardDetails';
import {GridItem} from '@chakra-ui/react';

export const ProductCard = ({
  product: {
    title,
    vote_average,
    poster_path,
    release_date,
    id,
    name,
    first_air_date,
  },
  product,
}) => {
  const productTitle = name ? name : title;
  const productUrl = name ? 'tv' : 'movie';
  const releaseDate = first_air_date ? first_air_date : release_date;

  return (
    <GridItem
      bg={'rgba(255, 255, 255, .1);'}
      borderRadius={'10px'}
      overflow={'hidden'}
      pos={'relative'}
    >
      <Link to={`/${productUrl}/${id}`}>
        <CardBodyDown
          release_date={releaseDate}
          image={poster_path}
          title={productTitle}
          vote_average={vote_average}
        />
      </Link>
      <CardDetails product={product} />
    </GridItem>
  );
};
