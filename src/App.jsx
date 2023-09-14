import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from './store/store';
import Cards from "./Cards";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Cards></Cards>
      </div>
    </Provider>
  );
}

export default App;
