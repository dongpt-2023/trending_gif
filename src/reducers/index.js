import { combineReducers } from 'redux';
import trendings from './trendings';
import login from './login';

const reducer = combineReducers({
  trendings,
  login,
});

export default reducer;
