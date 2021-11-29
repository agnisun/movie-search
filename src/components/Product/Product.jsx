import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { ProductTitle } from './ProductTitle';
import { ProductSubtitle } from './ProductSubtitle';
import { ProductInfo } from './ProductInfo';
import { useSelector } from 'react-redux';
import { ProductCasts } from './ProductCasts';
import { ProductDetails } from './ProductDetails';
import noImage from '../../assets/no-image.png';
import { ProductBackground } from './ProductBackground';

export const Product = ({
  data: {
    backdrop_path,
    title,
    release_date,
    genres,
    runtime,
    poster_path,
    overview,
    vote_average,
    tagline,
    first_air_date,
    name,
    episode_run_time,
    original_title,
    original_name,
    original_language,
    budget,
    revenue,
    status,
    id,
  },
}) => {
  const config = useSelector((state) => state.data.config);
  const imageUrl = config && config.images.base_url;
  const imageSize = config && config.images.backdrop_sizes[2];
  const credits = useSelector((state) => state.product.credits);
  const casts = credits.cast && credits.cast.filter((el, idx) => idx < 16);
  const releaseDate = first_air_date ? first_air_date : release_date;
  const productName = original_name ? original_name : original_title;
  const productTitle = name ? name : title;
  const productRunTime = episode_run_time ? episode_run_time[0] : runtime;
  const productOverview = overview ? overview : 'No description';

  return (
    <Box>
      <Box
        pos={'relative'}
        bg={
          backdrop_path &&
          `url(${imageUrl}${imageSize}/${backdrop_path}) right -200px top / cover no-repeat`
        }
        pl={{ base: '0', '2md': '56px' }}
        pt={{ base: '100px', '2md': '30px' }}
        pb={'30px'}
      >
        <ProductBackground backdrop_path={backdrop_path} />
        <Flex justifyContent={'center'} px={'15px'}>
          <Flex
            flexDir={{ base: 'column', '3md': 'row' }}
            w={'100%'}
            maxW={'1400px'}
            justifyContent={'flex-start'}
            alignItems={{ base: 'center', '3md': 'flex-start' }}
            pos={'relative'}
            zIndex={'2'}
          >
            <Image
              mb={{ base: '15px', '3md': '0' }}
              borderRadius={'10px'}
              maxW={'none'}
              minW={'300px'}
              w={'300px'}
              h={'450px'}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : noImage
              }
            />
            <Box p={{ base: '0', '3md': '10px 0 10px 30px' }}>
              <ProductTitle title={productTitle} release_date={releaseDate} />
              <ProductSubtitle
                genres={genres}
                vote_average={vote_average}
                releaseDate={releaseDate}
                productRunTime={productRunTime}
                productTitle={productTitle}
                id={id}
              />
              <ProductInfo
                crew={credits.crew}
                productOverview={productOverview}
                tagline={tagline}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Container maxW={'1400px'} pl={{ base: '15px', '2md': '71px' }}>
        {casts && casts.length > 0 && (
          <ProductCasts casts={casts} product={name ? 'tv' : 'movie'} />
        )}
        <ProductDetails
          original_title={productName}
          original_language={original_language}
          budget={budget}
          revenue={revenue}
          status={status}
        />
      </Container>
    </Box>
  );
};
