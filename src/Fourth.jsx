import React, { useContext } from "react";
import myContext2 from "./myContext";

function Fourth(){
    var d = useContext(myContext2)
    return (
        <div>
            <h1>Fourth</h1>
            <h1>{d.firstname}</h1>
        </div>
    )
}

export default Fourth