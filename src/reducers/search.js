import * as Types from '../constants/ActionTypes';

const initalState = {
  key: 'trending',
  isSearching: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case Types.SEARCH_GIF:
      return { ...state, key: action.key, isSearching: true };
    default:
      return state;
  }
};

export default reducer;
