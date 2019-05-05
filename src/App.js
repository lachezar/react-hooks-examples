import React, { useState, useCallback } from "react";

import Form from "./Form";
import "./App.css";

export default () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );

  const onSubmit = useCallback(
    (text) => setTodos(
      (oldTodos) => [{text, completed: false}, ...oldTodos]
    ),
    []
  );

  return (
    <div className="App">
      <Form onSubmit={onSubmit} />
      <ul>
        {todos.map(({ text, complete }, i) => (
          <li
            key={i}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </li>
        ))}
      </ul>
      <button onClick={() => setTodos([])}>reset</button>
    </div>
  );
};
