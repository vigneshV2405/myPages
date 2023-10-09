import React from 'react'
import { useGetPokemonbyIdQuery } from './services/pokemon'

function Pokedetails(props) {
    var { isLoading , data } = useGetPokemonbyIdQuery(props.name)
    if(!isLoading){
        console.log(data)
    }
  return (
    <div className='border border-2 border-primary m-2 p-2'>
        {
            isLoading && <b>please wait</b>
        }
        {
            !isLoading &&
            <div>
                <h2>{data.name}</h2>
                <span>
                    Types:&nbsp;
                    {data.types.map((type)=>{
                        return <span className='badge p-1 me-1 bg-dark'>{type.type.name}</span>
                    })}
                </span>
            </div>
        }
    </div>
  )
}

export default Pokedetails