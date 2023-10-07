import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from './store/store';
import Counter from "./features/Counter";
import Todolist from "./features/Todolist";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello</h1>
        <Counter></Counter>
        <Todolist></Todolist>
      </div>
    </Provider>
  );
}

export default App;
