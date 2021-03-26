import { all } from '@redux-saga/core/effects';

import taskSaga from "./tasks";

export default function* rootSaga() {
    yield all([
        taskSaga(), // <-- agregas mas de estos nada mas
    ]);
  } 