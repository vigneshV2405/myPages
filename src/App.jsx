import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.jsx'
import TodoList from './todolist.jsx'
import axios from 'axios';

function App() {
  var [countries,setC] = React.useState([])
  React.useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((res)=>{
      setC(res.data)
      console.log(res.data)
    })
  },[])
  return (
    <>
    <h1>Welcome</h1>
    {/* <Counter x={50}></Counter>
    <Counter x={10}></Counter> */}
    {/* <TodoList title={"Todo"} id={"inp1"} ar={['get clothes','buy shoes','book tickets']}></TodoList>
    <TodoList title={"convo"} id={"inp2"} ar={['pack bags']}></TodoList> */}
    <ul>
      {countries.map((country)=>{
        return <li>{country.name.common}</li>
      })}
    </ul>
    </>
  )
}

export default App;
