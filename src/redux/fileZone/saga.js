import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionsConstants } from './actions'
import dataMuseService from 'services/fileZone'
import Actions from 'redux/fileZone/actions'
function* fetchNews({ word }) {
  const data = yield call(dataMuseService.getSimilarWorlds, word);
  yield put(Actions.setDataSuccess(data));
}

export function* fileZone() {
  yield takeLatest(ActionsConstants.request, fetchNews)
}
