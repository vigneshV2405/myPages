import React, { useEffect } from 'react';
import axios from 'axios';

function Books() {
    var [ Books , setBooks ] = React.useState([])
    var [ newBook , setNewBook ] = React.useState({})
    var [ editFlag , setEF ] = React.useState(false)
    var [ editId , setId ] = React.useState(0)
    var [ genres , setGenres ] = React.useState([])
    useEffect(()=>{
        genBooks()
    },[])
    function addBook(){
        axios.post("http://localhost:4000/books",newBook).then((resp)=>{
            genBooks()
        })
        var t = document.getElementById('title').value = ''
        var a = document.getElementById('author').value = ''
    }
    function genBooks(){
        axios.get("http://localhost:4000/books").then((resp)=>{
            setBooks([...resp.data])
        })
    }
    function deleteBook(id){
        axios.delete('http://localhost:4000/books/'+id).then((resp)=>{
            genBooks()
        })
    }
    function editBook(book){
        var t = document.getElementById('title').value = book.title
        var a = document.getElementById('author').value = book.author
        setEF(true)
        setId(book.id)
        setNewBook({"title":book.title,"author":book.author})
    }
    function updateBook(){
        axios.put("http://localhost:4000/books/"+editId,newBook).then((resp)=>{
            genBooks()
        })
        var t = document.getElementById('title').value = ''
        var a = document.getElementById('author').value = ''
        setId(0)
        setEF(false)
    }
    function updateCheckbox(e){
        if(e.target.checked==true){
            var add = [...genres]
            add.push(e.target.value)
            setGenres([...add])
            console.log(add)
        }
        if(e.target.checked==false){
            var remove = [...genres]
            remove.splice(remove.indexOf(e.target.value),1)
            setGenres([...remove])
            console.log(remove)
        }
        
    }
  return (
    <div>
        <div style={{padding:'20px'}}>
            Title: <input id="title" onChange={(e)=>{setNewBook({...newBook,"title":e.target.value})}} /><br/>
            Author: <input id="author" onChange={(e)=>{setNewBook({...newBook,"author":e.target.value})}} /><br/>
            Availability:   <input onChange={(e)=>{newBook.Availability=e.target.value}} type="radio" name="availability" value="pdf"/>&nbsp;online pdf&nbsp;&nbsp;&nbsp;
                            <input onChange={(e)=>{newBook.Availability=e.target.value}} type="radio" name="availability" value="printed"/>&nbsp;printed<br/>
            Genre:  <input type="checkbox" onChange={(e)=>{updateCheckbox(e)}} value="Thriller"/> Thriller&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" onChange={(e)=>{updateCheckbox(e)}} value="Technology" /> technology&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" onChange={(e)=>{updateCheckbox(e)}} value="Biography" /> biography&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" onChange={(e)=>{updateCheckbox(e)}} value="Mystery" /> mystery&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" onChange={(e)=>{updateCheckbox(e)}} value="Comedy" /> Comedy
            <br/><br/>
            {
                !editFlag?(<button onClick={()=>{addBook()}} >Add book</button>):(<button onClick={()=>{updateBook()}} >Update details</button>)
            }
        </div>

        <div style={{display:"flex",flexWrap:'wrap'}}>
            {Books.map((book,i)=>{
                return  <li key={i} className='box' style={{listStyle:"none",padding:'10px'}}>
                            <h5>{book.id}. Title: {book.title}</h5>
                            <span>Author: {book.author.toUpperCase()}</span><br/>
                            {
                                !editId?(<button onClick={()=>{deleteBook(book.id)}}>delete</button>):(<button disabled onClick={()=>{deleteBook(book.id)}}>delete</button>)
                            }&nbsp;
                            {
                                !editId?(<button onClick={()=>{editBook(book)}}>edit</button>):(<button disabled onClick={()=>{editBook(book)}}>edit</button>)
                            }
                        </li>
            })}
        </div>
    </div>
  )
}

export default Books