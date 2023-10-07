import React from "react";
import { connect } from "react-redux";
import store from "../store/store";

function Todolist(props) {
  var [todo, setTodo] = React.useState("");
  return (
    <div>
      <h1>Todo list</h1>
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="enter todo"
      ></input>
      &nbsp;
      <button
        onClick={() => {
          props.dispatch({ type: "ADD", payload: todo });
        }}
      >
        add todo
      </button>
      <ul>
        {props.tds.todos.map((todo, i) => {
          return (
            <li>
              {todo}
              <button
                onClick={() => {
                  props.dispatch({ type: "DELETE", payload: i });
                }}
              >
                del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

