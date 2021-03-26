import {createAction} from "@reduxjs/toolkit";

export const loadTasksAction = createAction(
    "LOAD_TASKS_ACTION"
);

export const loadedTasksAction = createAction(
    "LOADED_TASKS_ACTION",
    function prepare(tasks) {
        return {
            payload: tasks
        };
    }
);