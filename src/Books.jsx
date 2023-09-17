import React from 'react'
import { useAddNewBookMutation, useGetAllBooksQuery, useDeleteBookMutation , useLazyGetAllBooksQuery } from './services/books'

function Books() {
    var { data:books , isLoading } = useGetAllBooksQuery()
    var [ newBook , setNewBook ] = React.useState({title:'',author:''})
    var [ addNewBook ] = useAddNewBookMutation()
    var [ xyz ] = useLazyGetAllBooksQuery()
    var [ del ] = useDeleteBookMutation()
    function addBook(n){
        addNewBook(n).then(xyz())
    }
    function deleteBook(i){
        del(i).then(xyz())
    }

  return (
    <div>
        <div className='box'>
            title: <input onChange={(e)=>{setNewBook({...newBook,title:e.target.value})}}></input><br/>
            author: <input onChange={(e)=>{setNewBook({...newBook,author:e.target.value})}}></input><br/><br/>
            <button onClick={()=>{addBook(newBook)}}>Add book</button>
        </div>
        {
            isLoading?(<b>Loading.....</b>)
            :(  <div style={{display:'flex'}}>
                    {books.map((book)=>{
                        return (
                            <div className='box'>
                                <b>Title: </b><span>{book.title}</span><br/>
                                <b>Author: </b><span>{book.author}</span><br/>
                                <button onClick={()=>{deleteBook(book.id)}}>delete</button>&nbsp;<button>edit</button>
                            </div>
                        )
                    })}
                </div>)
        }
    </div>
  )
}

export default Books