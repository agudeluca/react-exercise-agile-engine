import { call, put, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import dataMuseService from 'services/fileZone';

function* fetchSimilar({ word }: {word: string}) {
  const data = yield call(dataMuseService.getSimilarWorlds, word);
  yield put(actions.setDataSuccess(data));
}

export function* fileZone() {
  yield takeLatest(actions.request, fetchSimilar);
}
