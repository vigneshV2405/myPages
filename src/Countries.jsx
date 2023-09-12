import axios from 'axios'
import React, { useEffect } from 'react'
import {Link,Outlet} from 'react-router-dom';

function Countries() {
    
    const [ countries , setC ] = React.useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((resp)=>{
            setC(resp.data)
        })
    },[])

  return (
    <div className="border border-2 border-primary m-3 p-3 d-flex">
        <div>
            <h1>Countries</h1>
            <ul>
                { countries.length>0 && countries.map((country,i)=>{
                    return <li key={i}><Link to={"countrydetails/"+country.name.common}>{country.name.common}</Link></li>
                })}
            </ul>
        </div>
        <Outlet className="border border-2"></Outlet>
        
    </div>
  )
}

export default Countries