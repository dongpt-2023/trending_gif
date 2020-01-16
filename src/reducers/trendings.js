import * as Types from '../constants/ActionTypes';

const initalState = [];

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case Types.FETCH_TRENDING:
      return action.trendings;
    case Types.UPDATE_TRENDING:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
