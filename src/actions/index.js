import * as Types from '../constants/ActionTypes';

export const requestTrending = () => ({
  type: Types.REQUEST_TRENDING,
});

export const fetchTrending = (trendings) => ({
  type: Types.FETCH_TRENDING,
  trendings,
});

export const requestLogin = (infor) => ({
  type: Types.LOGIN_REQUEST,
  infor,
});
