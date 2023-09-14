import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addTodo , deleteTodo , reset } from './todoSlice';

function Todolist() {
    var {todos} = useSelector((state)=>{return state.td})
    var dispatch = useDispatch()
  return (
    <div className='box'>
        <h1>Todo list</h1>
        <input id="ntd"></input>&nbsp;
        <button onClick={()=>{dispatch(addTodo(document.getElementById('ntd').value))}}>add todo</button>
        <button onClick={()=>{dispatch(reset())}}>reset</button>
        {
            todos.map((todo,i)=>{
                return (
                    <li key={i}>
                        {todo}
                        <button onClick={()=>{dispatch(deleteTodo(i))}}>delete</button>
                    </li>
                )
            })
        }
    </div>
  )
}

export default Todolist