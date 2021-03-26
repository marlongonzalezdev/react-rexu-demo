import { createReducer } from "@reduxjs/toolkit";
import { loadTasksAction, loadedTasksAction } from "../actions/tasks";

const initialState = {
    tasksList: [],
    loading: false,
};

export const taskReducer = createReducer(initialState, {
    [loadTasksAction.type]: (state, action) => ({
        ...state,
        tasksList: [],
        loading: true,
    }),
    [loadedTasksAction.type]: (state, action) => ({
        ...state,
        tasksList: [...action.payload],
        loading: false,
    }),
});