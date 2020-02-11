import { all,fork } from 'redux-saga/effects';
import { fileZone }  from 'redux/fileZone/saga'
export default function* rootSaga() {
   yield all([
    fork(fileZone),
   ]);
}
