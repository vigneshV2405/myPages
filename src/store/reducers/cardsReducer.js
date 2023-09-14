import React from 'react';

const initialState = {
    students:[]
}

function cardsReducer(state=initialState,actions){
    if(actions.type==='ADDstudent'){
        return {...state,students:[...state.students,actions.payload]}
    }
    if(actions.type==='DELETEstudent'){
        var temp = [...state.students]
        temp.splice(actions.payload,1)
        return {...state,students:temp}
    }
    return state
}

export default cardsReducer;