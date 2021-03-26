import { call, put, takeLatest } from "redux-saga/effects";
import taskService from "./../../services/taskService";

function* loadTasks(action) {
    try {
        const tasks = yield call(taskService.getAllTasks);
        yield put({ type: "LOADED_TASKS_ACTION", payload : tasks});
    } catch (e) {
        console.log(e);
        // yield put({ type: LOAD_MESSAGES_FAILED, error: e });
    }
}

function* taskSaga() {
    yield takeLatest("LOAD_TASKS_ACTION", loadTasks);
}

export default taskSaga;
