import { combineReducers } from "@reduxjs/toolkit";

import { Todoslices } from "./Todoslices";

export const rootReducer=combineReducers({
    counters:Todoslices.reducer
})