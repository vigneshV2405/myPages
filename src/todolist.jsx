import React from "react"

function TodoList(props){
    var [todoList,setTodo] = React.useState(props.ar)
    function addTodo(){ 
        var ntd = document.getElementById('inp').value
        setTodo([...todoList,ntd])
    }
    function del(i){
        var temp = [...todoList]
        temp.splice(i,1)
        setTodo(temp)
    }
    return (
        <div className="box">
            <h1>Todo list</h1>
            <input id="inp"/>
            <button onClick={addTodo}>Add todo</button><br></br>
            {
                todoList.map((todo,i)=>{
                    return (
                        <>
                            <li>
                                {todo}
                                <button onClick={()=>{del(i)}}>delete</button>
                            </li>
                        </>
                    )
                })
            }
        </div>
    )
}

export default TodoList