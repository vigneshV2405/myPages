import React from 'react'
import store from './store/store'
import {connect} from 'react-redux'

function CountriesComp(props) {
  return (
    <div className='box'>
        <h1>Countries</h1>
        <button onClick={()=>{props.dispatch({type:'DISPLAY'})}}>get countries</button>
        {   props.cr.countries.length>0 && props.cr.countries.map((country,i)=>{
                return <li key={i}>{country.name.common}</li>
            })
        }
    </div>
  )
}

export default connect((store)=>{return store})(CountriesComp)