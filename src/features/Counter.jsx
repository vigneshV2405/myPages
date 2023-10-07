import React from 'react';
import { connect } from 'react-redux';
import store from '../store/store';


function Counter(props) {
    console.log(props)
  return (
    <div>
        <h1>Counter:{props.ct.count}</h1>
        <button onClick={()=>{props.dispatch({type:'INC'})}}>incement +</button>&nbsp;&nbsp;
        <button onClick={()=>{props.dispatch({type:'DEC'})}}>decrement -</button>
    </div>
  )
}

export default connect((store)=>{return store})(Counter)