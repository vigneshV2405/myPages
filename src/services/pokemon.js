import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon/' }),
  endpoints: (builder) => ({
    getAllpokemon: builder.query({
      query: () => `?limit=400`,
    }),
    getPokemonbyId: builder.query({
      query: (id) => `${id}`
    })
  }),
})

export const { 
  useGetAllpokemonQuery,
  useLazyGetAllpokemonQuery,
  useGetPokemonbyIdQuery
 } = pokemonApi