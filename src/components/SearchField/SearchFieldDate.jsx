import {useEffect, useState} from 'react';
import {Box, Flex, Input} from '@chakra-ui/react';
import {useDispatch} from 'react-redux';
import {filterReleaseAction} from '../../features/modules/search/search.actions';
import {currentDate} from '../../core/currentDate';

export const SearchFieldDate = () => {
  const initialDate = {
    from: '',
    to: currentDate(1)
  };
  const [date, setDate] = useState(initialDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.stringify(date) !== JSON.stringify(initialDate)) {
      dispatch(filterReleaseAction([date.from, date.to]));
    }
  }, [date]);
  
  const handleDateFrom = (e) => {
    setDate({ ...date, from: e.target.value });
  };
  
  const handleDateTo = (e) => {
    setDate({ ...date, to: e.target.value });
  };

  return (
    <>
      <Flex alignItems={'center'}>
        <Box flexBasis={'60px'} fontSize={'12px'} fontWeight={'400'}>
          from
        </Box>
        <Input
          w={'100%'}
          type={'date'}
          value={date.from}
          onChange={handleDateFrom}
        />
      </Flex>

      <Flex alignItems={'center'}>
        <Box flexBasis={'60px'} fontSize={'12px'} fontWeight={'400'}>
          to
        </Box>
        <Input
          w={'100%'}
          type={'date'}
          value={date.to}
          onChange={handleDateTo}
        />
      </Flex>
    </>
  );
};
