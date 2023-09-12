import React from 'react';
import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className='box'>
        <h1>Home</h1>
        <Link to="/contact">contact us</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/courses">our courses</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/countries">Countries</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default App;
