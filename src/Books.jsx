import React from 'react'
import { useAddNewBookMutation, useGetAllBooksQuery, useDeleteBookMutation , useLazyGetAllBooksQuery } from './services/books'
import { Link } from 'react-router-dom'

function Books() {
    var { data:books , isLoading } = useGetAllBooksQuery()
    var [ newBook , setNewBook ] = React.useState({title:'',author:'',availability:''})
    var [ genre , setGenre ] = React.useState([])
    var [ addNewBook ] = useAddNewBookMutation()
    var [ xyz ] = useLazyGetAllBooksQuery()
    var [ del ] = useDeleteBookMutation()
    function addBook(n){
        n = {...n,"genre":genre}
        addNewBook(n).then(xyz())
    }
    function deleteBook(i){
        del(i).then(xyz())
    }
    function handleGenre(e){
        if(e.target.checked){
            var temp = [...genre]
            temp.push(e.target.value)
            setGenre(temp)
        }
        else{
            var i = genre.indexOf(e.target.value)
            var temp = [...genre]
            temp.splice(i,1)
            setGenre(temp)
        }
    }

  return (
    <div>
        <div className='box'>
            title: <input onChange={(e)=>{setNewBook({...newBook,title:e.target.value})}}></input><br/>
            author: <input onChange={(e)=>{setNewBook({...newBook,author:e.target.value})}}></input><br/>
            Genre:  <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="horror"/>Horror&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="comedy"/>Comedy&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="technology"/>Tech&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="mystery"/>Mystery&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="biography"/>Biography&nbsp;&nbsp;<br/>
            Availability: <input name="availability" onChange={(e)=>{setNewBook({...newBook,availability:e.target.value})}} type="radio" value="pdf" />online pdf&nbsp;&nbsp;<input name="availability" onChange={(e)=>{setNewBook({...newBook,availability:e.target.value})}} type="radio" value="printed" />printed book
            <br/><br/><button onClick={()=>{addBook(newBook)}}>Add book</button>
        </div>
        {
            isLoading?(<b>Loading.....</b>)
            :(  <div style={{display:'flex'}}>
                    {books.map((book)=>{
                        return (
                            <div className='box'>
                                <b>Title: </b><span>{book.title}</span><br/>
                                <b>Author: </b><span>{book.author}</span><br/>
                                <b>Genre:</b>{book.genre.map((x)=>{return <span style={{backgroundColor:'gray',color:"white",borderRadius:'5px',fontSize:'13px',padding:'2px',margin:'5px 5px',border:"1px solid black"}}>{x}</span>})}<br/>
                                <b>Availability:</b><span style={{backgroundColor:'gray',color:"white",borderRadius:'5px',fontSize:'13px',padding:'2px',margin:'5px',border:"1px solid black"}}>{book.availability}</span><br/>
                                <button onClick={()=>{deleteBook(book.id)}}>delete</button>&nbsp;<Link to={'/editBook/'+book.id}><button>edit</button></Link>
                            </div>
                        )
                    })}
                </div>)
        }
    </div>
  )
}

export default Books