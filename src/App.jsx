import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter.jsx'
import TodoList from './todolist.jsx'
import axios from 'axios';
import Child from './childComp.jsx'
import Ren from "./useEffect.jsx"
import First from "./first.jsx"
import myContext2 from './myContext';

function App() {
    return (
      <myContext2.Provider value={{firstname:"vignesh",lastname:"varikolu",age:22}}>
        <First></First>
      </myContext2.Provider>
    )
}

export default App;
