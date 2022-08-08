import  {createReducer } from "@reduxjs/toolkit";

const initialState={
    count:0
}

export const customReducer = createReducer(initialState,{
    increment:(state)=>{
        state.count +=1;
    },
    incrementByValue:(state,action)=>{
        state.count +=action.payload
    },
    decrement:(state)=>{
        state.count -=1;
    }
})