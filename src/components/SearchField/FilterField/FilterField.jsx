import {useState} from 'react';
import {Box, Flex, Stack} from '@chakra-ui/react';
import {UpDownIcon} from '@chakra-ui/icons';
import {SearchFieldTitle} from '../SearchFieldTitle';
import {openTab} from '../../../core/openTab';
import {SearchFieldDate} from '../SearchFieldDate';
import {FilterFieldAge} from './FilterFieldAge';
import {FilterFieldGenre} from './FilterFieldGenre';

export const FilterField = ({ product }) => {
  const [tab, setTab] = useState(false);

  const handleTab = () => {
    openTab(setTab);
  };

  return (
    <Box p={'20px 15px'} bg={'#fff'} borderRadius={'10px'} mb={'50px'}>
      <Flex
        w={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        onClick={handleTab}
        cursor={'pointer'}
      >
        <Box as={'h4'}>Filter</Box>
        {<UpDownIcon />}
      </Flex>
      <Box d={tab ? 'block' : 'none'}>
        <Box mb={'10px'}>
          <SearchFieldTitle text={'Release dates'} />
          <Stack dir={'column'}>
            <SearchFieldDate />
          </Stack>
        </Box>
        <Box>
          <SearchFieldTitle text={'Genres'} />
          <FilterFieldGenre product={product} />
        </Box>
        <Box mb={'10px'}>
          <SearchFieldTitle text={'Certification'} />
          <FilterFieldAge product={product} />
        </Box>
      </Box>
    </Box>
  );
};
