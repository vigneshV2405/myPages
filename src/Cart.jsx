import React, { useContext, useEffect } from 'react';
import Mycontext from './context';

function Cart() {
    var cp = useContext(Mycontext)
    var [ cartProducts , setCp ] = React.useState([...cp])
    var temp = {}
    cp.forEach((d)=>{
        temp.d.id=1
    })
    console.log(temp)
    var [ cpQty , setQty ] = React.useState({...temp})
    
    console.log(cpQty)
    useEffect(()=>{
        
    },[])
    function inc(i){
        setQty({...cpQty,i:cpQty.i+1})
    }

  return (
    <div className='border p-2 m-2 w-100'>
        <h1>Cart</h1>
        {
            cartProducts.map((p)=>{
                return (
                    <div className='border border-warning m-2 p-2'>
                        <span>{p.title}</span><br/>
                        <b>Rs.{p.price}</b><br/>
                        <span>Qty: <button>-</button> {1} <button onClick={()=>{inc(p.id)}}>+</button></span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Cart