import * as Types from '../constants/ActionTypes';

export const requestTrending = () => ({
  type: Types.REQUEST_TRENDING,
});

export const fetchTrending = (trendings) => ({
  type: Types.FETCH_TRENDING,
  trendings,
});

export const searchGif = (key) => ({
  type: Types.SEARCH_GIF,
  key,
});

export const updateTrendings = (data) => ({
  type: Types.UPDATE_TRENDING,
  data,
});
