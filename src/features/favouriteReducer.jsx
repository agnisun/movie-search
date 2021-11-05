const initialState = {
  favourite: [],
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return { ...state, favourite: [...state.favourite, action.payload] };

    default:
      return state;
  }
};
