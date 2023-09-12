import React from 'react';
import {connect} from 'react-redux'
import store from './store/store'

function Counter(props){
    console.log('counter rendered')

    return (
        <div className="box">
            <h1>Counter {props.c.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>Reset</button>
        </div>
    )
}

export default connect((store)=>{return store})(Counter)