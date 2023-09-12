import React from 'react'
import { useParams } from 'react-router-dom'

function Countrydetails() {
    var x = useParams()
  return (
    <div>
        <h3>{x.cname}</h3>
    </div>
  )
}

export default Countrydetails