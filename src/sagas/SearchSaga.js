import { put, takeLatest, call } from 'redux-saga/effects';

// Use Action Types
import * as Types from '../constants/ActionTypes';
// Use API getTrending
import { searchGifByKey } from '../api/getTrending';

function* fetchByKey(values) {
  // yield put( {type: Types.SEARCH_GIF, key: values.key});
  const listTredings = yield call(searchGifByKey, values.key);
  yield put({ type: Types.UPDATE_TRENDING, data: listTredings });
}

export function* watchSearchGifAction() {
  yield takeLatest(Types.SEARCH_GIF, fetchByKey);
}
