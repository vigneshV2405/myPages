import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,actions)=>{
            state.count++
        },
        decrement:(state,actions)=>{
            state.count--
        },
        reset:(state,actions)=>{
            state.count=initialState.count
        }
    }
})

export var {increment,decrement,reset} = counterSlice.actions
export default counterSlice.reducer