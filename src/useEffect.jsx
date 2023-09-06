import React from "react";
import Child from './childComp'

function Ren(){
    var [x,setX] = React.useState(109)
    var [y,setY] = React.useState(654)
    function incx(){
        setX(x+1)
    }
    function incy(){
        setY(y+1)
    }
    var ar = React.useMemo(()=>{
        return [1,2,3]
    },[])
    return (
        <div>
            <h1>Hello</h1>
            <h1>Counter:{x}</h1>
            <h1>Counter:{y}</h1>
            <button onClick={()=>{incx()}}>increase X</button>
            <button onClick={()=>{incy()}}>increase Y</button>
            <br></br>
            <br></br>
            <Child x={ar}></Child>
        </div>
    )
}
export default Ren