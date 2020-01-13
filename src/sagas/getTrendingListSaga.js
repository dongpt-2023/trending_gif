import { call, put, takeEvery } from 'redux-saga/effects';
import getTreding from '../api/getTrending';
import { fetchTrending } from '../actions/index';
import * as types from '../constants/ActionTypes';

function* getListTrending() {
  const trendings = yield call(getTreding);
  yield put(fetchTrending(trendings));
}

function* watchFetchTrending() {
  yield takeEvery(types.REQUEST_TRENDING, getListTrending);
}

export default watchFetchTrending;
