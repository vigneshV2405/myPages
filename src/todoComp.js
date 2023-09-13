import React from 'react';
import {connect} from 'react-redux';
import store from './store/store';

function Todolist(props){
    console.log('todo comp rendered',props)
    var [ntd,setNTD] = React.useState('')
    return (
        <div className="box">
            <h1>Todo list</h1>
            <input onChange={(e)=>{setNTD(e.target.value)}}></input>&nbsp;&nbsp;
            <button onClick={()=>{props.addTodo(ntd)}}>add todo</button>&nbsp;&nbsp;
            <button onClick={()=>{props.res()}}>reset</button>
            {
                props.todos.map((todo,i)=>{
                    return (
                        <li key={i}>
                            {todo}
                            <button onClick={()=>{props.deleteTodo(i)}}>delete</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

function maptoState(state){
    return state.td
}
function maptoDispatch(dispatch){
    return {
        addTodo:(ntd)=>{dispatch({type:"ADDTODO",payload:ntd})},
        deleteTodo:(i)=>{dispatch({type:"DELETETODO",payload:i})},
        res:()=>{dispatch({type:'RESETtodos'})}
    }
}

export default connect(
    maptoState,
    maptoDispatch
)(Todolist);