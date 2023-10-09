import React from 'react'
import { useGetAllpokemonQuery, useGetPokemonbyIdQuery } from './services/pokemon'
import Pokedetails from './Pokedetails'

function Pokemon() {
    var { isLoading , data } = useGetAllpokemonQuery()
    if(!isLoading){
        console.log(data)
    }
    
  return (
    <div>
        {
            isLoading && <h2>Loading...</h2>
        }
        {
            !isLoading &&
            <div className='d-flex flex-wrap p-2 justify-content-between'>
                {data.results.map((poke)=>{
                    return <Pokedetails name={poke.name}></Pokedetails>
                })}
            </div>
        }
    </div>
  )
}

export default Pokemon