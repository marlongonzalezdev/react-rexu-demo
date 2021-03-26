import { combineReducers } from "@reduxjs/toolkit";
import {taskReducer} from "./tasks";

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;
