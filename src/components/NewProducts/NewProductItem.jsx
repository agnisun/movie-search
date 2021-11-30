import {useHistory} from 'react-router-dom';
import {CardBody} from '../../common/CardBody';
import {CardDetails} from '../../common/CardDetails';
import {Box} from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import {useState} from 'react';

export const NewProductItem = ({
  product,
  data: { id, poster_path, name, title, vote_average, genre_ids },
  data,
}) => {
  const genres = useSelector((state) =>
    product === 'movie' ? state.data.genresMovies : state.data.genresSerials
  );
  const productTitle = name ? name : title;
  
  const history = useHistory();
  const [mouseMoved, setMouseMoved] = useState(false);

  const handleClick = () => {
    if (!mouseMoved) {
      history.push(`/${product}/${id}`);
    }
  };

  return (
    <Box position={'relative'} m={{ base: '0 5px', '2md': '0 10px 0 0' }}>
      <Box cursor={'pointer'}
        onMouseMove={() => setMouseMoved(true)}
        onMouseDown={() => setMouseMoved(false)}
        onMouseUp={() => handleClick()}
      >
        <CardBody
          image={poster_path}
          title={productTitle}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={genres}
        />
      </Box>
      <CardDetails product={data} />
    </Box>
  );
};
