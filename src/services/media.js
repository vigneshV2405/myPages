// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const MediaApi = createApi({
  reducerPath: 'MediaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getallusers: builder.query({
      query: () => 'users',
    }),
    addnewUser: builder.mutation({
        query: (b) => {
            console.log(b)
            return {
                url:'users',
                method:'POST',
                body:b
            }
        }
    }),
    getuserbyId: builder.query({
      query: (b) =>{
        return `users/${b}`
      }
    }),
    getallposts: builder.query({
      query: () => 'posts'
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetallusersQuery,
    useAddnewUserMutation,
    useLazyGetallusersQuery,
    useGetuserbyIdQuery,
    useGetallpostsQuery
 } = MediaApi