import {
  FILTER_ADD_AGE,
  FILTER_ADD_GENRES,
  FILTER_RELEASE,
  FILTER_REMOVE_AGE,
  FILTER_REMOVE_GENRES,
  FILTER_SORT_AGES,
  NEXT_PAGE,
  PREV_PAGE,
  SEARCH_DEFAULT,
  SEARCH_DEFAULT_REQUEST,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SET_SORT,
} from './search.actions';
import {currentDate} from '../../../core/currentDate';

const initialState = {
  products: {},
  sort: 'popularity.desc',
  genres: [],
  certification: [],
  release: ['', currentDate(1)],
  changing: false,
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_REQUEST:
    return {...state, loading: true};
  case SEARCH_DEFAULT_REQUEST:
    return {...initialState, loading: true};
  case SEARCH_DEFAULT:
    return {...initialState, products: action.payload, loading: false, changing: false,};
  case SEARCH_SUCCESS:
    return {...state, products: action.payload, loading: false, changing: false,};
  case SET_SORT:
    return {...state, sort: action.payload, changing: true};
  case FILTER_RELEASE:
    return {...state, release: action.payload, changing: true};
  case FILTER_ADD_GENRES:
    return {
      ...state,
      genres: [...state.genres, action.payload],
      changing: true,
    };
  case FILTER_REMOVE_GENRES:
    return {
      ...state,
      genres: state.genres.filter((el) => el !== action.payload),
      changing: true,
    };
  case FILTER_ADD_AGE:
    return {
      ...state,
      certification: [...state.certification, action.payload],
      changing: true,
    };
  case FILTER_REMOVE_AGE:
    return {
      ...state,
      certification: state.certification.filter(
        (el) => el.value !== action.payload,
      ),
      changing: true,
    };
  case FILTER_SORT_AGES:
    return {
      ...state,
      certification: state.certification.sort((a, b) => a.order - b.order),
    };
  case NEXT_PAGE:
    return {
      ...state,
      products: {
        ...state.products,
        page: action.payload,
      },
    };
  case PREV_PAGE:
    return {
      ...state,
      products: {
        ...state.products,
        page: action.payload,
      },
    };

  default:
    return state;
  }
};
