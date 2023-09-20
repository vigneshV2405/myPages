import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "./Navbar";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar></Navbar>
      </div>
    </Provider>
  );
}

export default App;
