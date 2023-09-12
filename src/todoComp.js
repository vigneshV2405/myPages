import React from 'react';
import {connect} from 'react-redux';
import store from './store/store';

function Todolist(props){
    console.log('todo comp rendered')
    var [ntd,setNTD] = React.useState('')
    return (
        <div className="box">
            <h1>Todo list</h1>
            <input onChange={(e)=>{setNTD(e.target.value)}}></input>&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:'ADDTODO',payload:ntd})}}>add todo</button>&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:'RESET'})}}>reset</button>
            {
                props.td.todos.map((todo,i)=>{
                    return (
                        <li>
                            {todo}
                            <button onClick={()=>{props.dispatch({type:"DELETETODO",payload:i})}}>delete</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default connect((store)=>{return store})(Todolist);