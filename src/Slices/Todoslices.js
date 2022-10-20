import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counters: [],
}

export const Todoslices=createSlice({
    name:"counters",
    initialState:initialState,
    reducers:{
        addCounter: (state) => {
            state.counters.unshift({
                id: new Date().toISOString(),
                count: 0,
            });
        },
        increment: (state, action) => {
            state.counters.forEach(item => {
                if (item.id === action.payload) {
                    item.count += 1;
                }
            });
        },
        decrement: (state, action) => {
            state.counters.forEach(item => {
                if (item.id === action.payload) {
                    item.count -= 1;
                }
            });
        },
        deleteCounter: (state, action) => {
            state.counters = state.counters.filter(item => item.id !== action.payload);
        }
    }
})

export const { addCounter, increment, decrement, deleteCounter }=Todoslices.actions;
export const counterState=state=>state.counters.counters;
