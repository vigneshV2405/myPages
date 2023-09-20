import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '',
    }),
    getProductById: builder.query({
      query: (id)=>{return `${id}`}
    })
  }),
})

export const { useGetProductByIdQuery , useGetAllProductsQuery } = productsApi