import React from 'react';
import {connect} from 'react-redux'
import store from './store/store'

function Counter(props){
    console.log(props)

    return (
        <div className="box">
            <h1>Counter {props.count}</h1>
            <button onClick={()=>{props.incre()}}>increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.decre()}}>decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{props.res()}}>Reset</button>
        </div>
    )
}

function maptoState(store){
    return store.c
}
function maptoDispatch(dispatch){
    return {
        incre:()=>{dispatch({type:'INC'})},
        decre:()=>{dispatch({type:'DEC'})},
        res:()=>{dispatch({type:'RESETcounter'})}
    }
}

export default connect(
    maptoState,
    maptoDispatch
)(Counter)