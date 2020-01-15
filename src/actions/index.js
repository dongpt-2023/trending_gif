import * as Types from '../constants/ActionTypes';
import getTrending from '../api/getTrending';

export const fetchTrendingRequest = () => {
  return (dispatch) => {
    getTrending().then(({data})=>{
      dispatch(fetchTrending(data.data));
    })
  }
}

export const fetchTrending = (trendings) => {
  return {
    type: Types.FETCH_TRENDING,
    trendings
  }
}
