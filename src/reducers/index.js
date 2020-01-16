import { combineReducers } from 'redux';
import trendings from './trendings';
import searchs from './search';

const reducer = combineReducers({
  trendings,
  searchs,
});

export default reducer;
