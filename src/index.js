import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const DATA = [
  { id: "todo-1", name: "Eat", completed: true },
  { id: "todo-2", name: "Sleep", completed: true },
  { id: "todo-3", name: "Repeat", completed: false }
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
