import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCountryByNameQuery } from './services/countries';

function Countrydetails() {
    var {cname} = useParams()
    var { data:country , isLoading } = useGetCountryByNameQuery(cname)
    
  return (

    <>
        {
            isLoading?(<b>Loading...</b>):
            (<div>
                <h1>{cname}</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Capital:</th>
                            <td>{country[0].capital[0]}</td>
                        </tr>
                        <tr>
                            <th>Continent:</th>
                            <td>{country[0].continents[0]}</td>
                        </tr>
                        <tr>
                            <th>Borders:</th>
                            <td>{country[0].borders?(country[0].borders.join(' , ')):(<span>no border sharing</span>)}</td>
                        </tr>
                        <tr>
                            <th>languages:</th>
                            <td>{}</td>
                        </tr>
                    </tbody>
                </table>
            </div>)
        }
    </>
    
  )
}

export default Countrydetails