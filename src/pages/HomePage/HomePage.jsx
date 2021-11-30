import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {nowPlayingRequestAction} from '../../features/modules/nowPlaying/nowPlaying.actions';
import {Box} from '@chakra-ui/react';
import {IntroSlider} from '../../components/IntroSlider/IntroSlider';
import {NewProducts} from '../../components/NewProducts/NewProducts';
import {PageLoad} from '../../components/PageLoad/PageLoad';

export const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.nowPlaying.loading);

  useEffect(() => {
    dispatch(nowPlayingRequestAction());
  }, []);

  return (
    isLoading ? <PageLoad/> : (
      <Box minH={'100vh'}>
        <IntroSlider />
        <Box pl={{ base: '0', '2md': '56px' }}>
          <NewProducts product={'movie'} />
          <NewProducts product={'tv'} />
        </Box>
      </Box>
    )
  );
};
