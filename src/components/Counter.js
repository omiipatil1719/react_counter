import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { counterState, increment, decrement, deleteCounter } from "../Slices/Todoslices";

const Counter = ({ count, id }) => {
    
const dispatch = useDispatch();

return (
    <>
        <div>
            <button onClick={() => {
                dispatch(increment(id))
            }}>+</button>
            <span>{count}</span>
            <button onClick={() => {
                dispatch(decrement(id));
            }}>-</button>
            &nbsp;
            <button onClick={() => {
                dispatch(deleteCounter(id));
            }}>Delete</button>        
        </div>    
    </>
)

}
export default Counter;

