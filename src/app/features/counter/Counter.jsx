import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , reset } from './counterSlice'

function Counter() {
    var {count} = useSelector((state)=>{return state.c})
    var dispatch = useDispatch()
  return (
    <div className="box">
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>inc</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch(decrement())}}>dec</button>&nbsp;&nbsp;&nbsp;
        <button onClick={()=>{dispatch(reset())}}>reset</button>
    </div>
  )
}

export default Counter