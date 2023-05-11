import React from "react";
import ReactDOM from "react-dom/client";

import { TodoApp } from "./08-useReducer/TodoApp";
/* import "./08-useReducer/intro-reducer"; */
/* import { HooksApp } from "../HooksApp"; */
//import { Padre } from "./07-tarea-memo/Padre";
//import { CallBackHook } from "./06-memo/CallBackHook";
//import { MemoHook } from "./06-memo/MemoHook";
/* import { Memorize } from "./06-memo/Memorize"; */
//import { Layout } from "./05-useLayoutEffect/Layout";
/* import { FocusScreen } from "./04-useRef/FocusScreen";*/
/* import { MultipleHooks } from "./03-examples/MultipleHooks";*/
/* import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";*/
/* import { SimpleForm } from "./02-useEffect/SimpleForm";*/
/* import { CounterApp } from "./01-useState/CounterApp"; */
/* import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";*/
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
