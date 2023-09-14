import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos : ['get groceries','make breakfast','clean shoes']
}

export const todoSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,actions)=>{
            state.todos.push(actions.payload)
        },
        deleteTodo:(state,actions)=>{
            state.todos.splice(actions.payload,1)
        },
        reset:(state,actions)=>{
            state.todos=initialState.todos
        }
    }
})

export const {addTodo,deleteTodo,reset} = todoSlice.actions
export default todoSlice.reducer