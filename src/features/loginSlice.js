import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        changeUser:(state,actions)=>{
            state.user=actions.payload
        }
    }
})

export const { changeUser } = userSlice.actions
export default userSlice.reducer