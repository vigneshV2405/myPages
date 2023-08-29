import React from "react"
import './App.css'

function Counter(props){
    var [i,setI] = React.useState(0)
    function inc(){
        setI(i+props.x)
    }
    function dec(){
        setI(i-props.x)
    }
    return (
        <div className="box">
            <h1>Counter {i}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}

export default Counter