import { useEffect } from "react";
import React from 'react'
import axios from 'axios'

const initialState = {
    countries:[]
}
var Countries = []
axios.get("https://restcountries.com/v3/all")
.then((resp)=>{
    Countries = [...resp.data]
})

function CountriesReducer(state=initialState,action){
    if(action.type==="DISPLAY"){
        return {...state,countries:Countries}
    }
    return state
}

export default CountriesReducer