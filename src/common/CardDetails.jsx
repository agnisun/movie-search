import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';
import { SettingsIcon, StarIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavouriteAction,
  removeFromFavouriteAction,
} from '../features/modules/favourite/favourite.actions';
import { addToFavourite } from '../core/addToFavourite';

export const CardDetails = ({ product }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const favouriteList = useSelector((state) => state.favourite.favouriteList);
  const isFavourite =
    favouriteList &&
    favouriteList.findIndex((movie) => movie.id === product.id) !== -1;
  const productTitle = product.name ? product.name : product.title;
  const colorVariant = isFavourite ? 'red.500' : 'black';

  const handleFavourite = () => {
    if (!isFavourite) {
      dispatch(addToFavouriteAction(product));
    } else {
      dispatch(removeFromFavouriteAction(product.id));
    }

    addToFavourite(productTitle, isFavourite, toast);
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        pos={'absolute'}
        zIndex={'25'}
        top={'5px'}
        right={'5px'}
        _hover={{ background: 'blue.400' }}
        size="sm"
        borderRadius={'50%'}
        bg={{ base: 'blue.400', sm: 'rgba(255, 255, 255, 0.3)' }}
        icon={<SettingsIcon />}
      />
      <MenuList
        fontSize={'16px'}
        minW={'150px'}
        color={'black'}
        pos={'absolute'}
        top={'0'}
        right={'-32px'}
      >
        <MenuItem justifyContent={'center'} onClick={handleFavourite}>
          <StarIcon mr={'5px'} fontSize={'10px'} color={colorVariant} />
          <Box as={'span'}>Favourite</Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
