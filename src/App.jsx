import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./counterComp";
import Todolist from "./todoComp";
import CountriesComp from "./CountriesComp";

function App() {
  return (
    <Provider store={store}>
      <div className="box">
        <h1>Hello</h1>
        <Counter></Counter>
        <Todolist></Todolist>
        <CountriesComp></CountriesComp>
      </div>
    </Provider>
  );
}

export default App;
