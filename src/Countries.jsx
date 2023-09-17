import React from 'react';
import { useGetAllCountriesQuery } from './services/countries';
import { Link , Outlet } from 'react-router-dom';

function Countries() {
    var { data:countries , isLoading } = useGetAllCountriesQuery()
  return (
    <div style={{display:'flex'}}>
        <div>
            <h1>Countries</h1>
            {
                isLoading?(<b>Loading...</b>):(countries.map((country,i)=>{
                    return (
                        <li key={i}>
                            <Link to={"/countries/"+country.name.common}>{country.name.common}</Link>
                        </li>
                    )
                }))
            }
        </div>
        <div style={{}}>
            <Outlet></Outlet>
        </div>

    </div>
  )
}

export default Countries