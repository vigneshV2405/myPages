import React, { useEffect } from 'react'
import Mycontext from './context';
import { useGetAllProductsQuery } from './services/products';
import { Link, Outlet } from 'react-router-dom';

function Products() {
    var { data:products , isLoading:is1 } = useGetAllProductsQuery()
    var [ cart , setCart ] = React.useState([])
    
    function removeprdct(i){
        var temp = [...cart]
        temp.splice(temp.indexOf(i),1)
        setCart([...temp])
    }
    function addToCart(x){
        setCart([...cart,x])
    }

  return (
    <div className='d-flex flex-wrap'>
        <div className='border p-2 m-2'>
            <h1 style={{display:'inline-block'}}>Products</h1>
            <span style={{marginLeft:'300px',fontSize:'20px'}}>Cart items: {cart.length}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="cart/"><button style={{fontSize:"12px",borderRadius:"5px"}}>go to cart</button></Link>
            {
                is1?(<h5>Loading...</h5>):(
                    <div>
                        {
                            products.map((product,i)=>{
                                return (
                                    <div style={{width:'800px'}} key={i} className='border border-warning p-3 m-3'>
                                        <img src={product.image} style={{width:"100px",height:'100px'}} /><br/>
                                        <b>{product.title}</b><br/>
                                        <span>{product.description}</span><br/>
                                        <span className='badge bg-primary border border-dark'>{product.category}</span>
                                        <span className='badge bg-primary ms-2 border border-dark'>{product.rating.rate}</span><br/>
                                        <h5 className='mt-2 mb-0'>${product.price}</h5><br/>
                                        {
                                            (cart.indexOf(product)==-1)?(<button onClick={()=>{addToCart(product)}} className='rounded' style={{fontSize:'11px'}}>Add to cart</button>):
                                            (<button onClick={()=>{removeprdct(product.id)}} className='rounded' style={{fontSize:'11px'}}>Remove from cart</button>)
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
        <div>
            <Mycontext.Provider value={cart}>
                <Outlet></Outlet>
            </Mycontext.Provider>
        </div>
    </div>
  )
}

export default Products;
