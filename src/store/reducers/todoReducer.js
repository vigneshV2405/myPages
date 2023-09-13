const initialState = {
    todos : ['good sleep','workout']
}

function todoReducer(state=initialState,action){
    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==='RESETtodos'){
        return {...state,todos:[...initialState.todos]}
    }
    if(action.type==='DELETETODO'){
        var temp = state.todos
        temp.splice(action.payload,1)
        return {...state,todos:[...temp]}
    }
    return state
}

export default todoReducer