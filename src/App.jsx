import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import Pokemon from "./Pokemon";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Pokemon></Pokemon>
      </div>
    </Provider>
  );
}

export default App;
