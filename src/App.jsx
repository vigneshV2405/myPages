import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import {store} from './app/store'
import Counter from './app/features/counter/Counter.jsx'
import Todolist from "./app/features/todolist/Todolist";

function App() {
  return (
      <Provider store={store}>
        <div className="box">
        <h1>Hello</h1>
        <Counter></Counter>
        <Todolist></Todolist>
        </div>
      </Provider>
  );
}

export default App;
