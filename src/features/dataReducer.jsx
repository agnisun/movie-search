const initialState = {
  data: [],
  genres: [],
  config: null,
  serials: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_GENRES":
      return { ...state, genres: action.payload.genres };
    case "SET_CONFIG":
      return { ...state, config: action.payload };
    case "SET_SERIALS":
      return { ...state, serials: action.payload };

    default:
      return state;
  }
};
