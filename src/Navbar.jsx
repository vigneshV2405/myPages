import React from 'react';
import { Link , Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div className='box'>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className='border m-2 p-2'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Navbar