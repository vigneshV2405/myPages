import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books`,
    }),
    addNewBook: builder.mutation({
        query:(n) => {
            return {
                url:'/books',
                method: 'POST',
                body: n
            }
        }
    }),
    deleteBook: builder.mutation({
        query: (i)=>{
            return {
                url:`/books/${i}`,
                method:'DELETE'
            }
        }
    })
  }),
})

export const { useGetAllBooksQuery , useAddNewBookMutation, useDeleteBookMutation , useLazyGetAllBooksQuery } = booksApi