import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetBookByIdQuery , useEditBookByIdMutation, useLazyGetAllBooksQuery } from './services/books'

function Booksedit() {
    var { id } = useParams()
    var [ ed ] = useEditBookByIdMutation()
    var { data:book , isLoading } = useGetBookByIdQuery(id)
    var [ re ] = useLazyGetAllBooksQuery()
    var [ newBook , setNewBook ] = React.useState({title:'',author:'',availability:''})
    var [ genre , setGenre ] = React.useState([])

    
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
    function updtbk(n){
        n = {...n,"genre":genre}
        ed({id,n}).then(()=>{re()})
    }

  return (
    <div>
        <h1>Edit book details</h1>
        title: <input id="ti" onChange={(e)=>{setNewBook({...newBook,title:e.target.value})}}></input><br/>
            author: <input id="au" onChange={(e)=>{setNewBook({...newBook,author:e.target.value})}}></input><br/>
            Genre:  <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="horror"/>Horror&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="comedy"/>Comedy&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="technology"/>Tech&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="mystery"/>Mystery&nbsp;&nbsp;
                    <input onChange={(e)=>{handleGenre(e)}} type="checkbox" value="biography"/>Biography&nbsp;&nbsp;<br/>
            Availability: <input name="availability" onChange={(e)=>{setNewBook({...newBook,availability:e.target.value})}} type="radio" value="pdf" />online pdf&nbsp;&nbsp;<input name="availability" onChange={(e)=>{setNewBook({...newBook,availability:e.target.value})}} type="radio" value="printed" />printed book
            <br/><br/><Link to="/books"><button onClick={()=>{updtbk(newBook)}}>Update changes</button></Link>
    </div>
  )
}

export default Booksedit