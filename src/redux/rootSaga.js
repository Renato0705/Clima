import { all } from 'redux-saga/effects'; 
import clima from "./clima/sagas";

function* rootSaga() {
  yield all([clima]);
}

export default rootSaga;
