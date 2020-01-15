import * as Types from '../constants/ActionTypes';

const initalState = [];

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case Types.FETCH_TRENDING:
      state = action.trendings;
      return state;
    default:
      return state;
  }
};

export default reducer;
