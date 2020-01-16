import { all } from 'redux-saga/effects';

import getTrendingSaga from './getTrendingListSaga';
//Use SearchSaga
import { watchSearchGifAction } from './SearchSaga';

function* rootSaga() {
  yield all([
    getTrendingSaga(),
    watchSearchGifAction(),
  ]);
}

export default rootSaga;
