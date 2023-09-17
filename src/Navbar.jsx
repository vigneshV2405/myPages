import React from 'react';
import { Link , Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div className='box'>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/books'>Books</Link>
        </div>
        <div className='box' style={{backgroundColor:'pink'}}>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Navbar