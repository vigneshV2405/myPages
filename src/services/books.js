import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/books`,
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`
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
    editBookById: builder.mutation({
      query: ({id,n})=>{
        return {
          url:`/books/${id}`,
          method:'PUT',
          body:n
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

export const { useGetAllBooksQuery , useAddNewBookMutation, useDeleteBookMutation , useGetBookByIdQuery , useEditBookByIdMutation , useLazyGetAllBooksQuery } = booksApi