import { fork, all } from 'redux-saga/effects';
import getTrendingSaga from './getTrendingListSaga';

function* rootSaga() {
  yield all([getTrendingSaga()]);
}

export default rootSaga;
