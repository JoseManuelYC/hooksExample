import React from "react";
import ReactDOM from "react-dom/client";
import { CallBackHook } from "./06-memo/CallBackHook";
//import { MemoHook } from "./06-memo/MemoHook";
/* import { Memorize } from "./06-memo/Memorize"; */
//import { Layout } from "./05-useLayoutEffect/Layout";
/* import { FocusScreen } from "./04-useRef/FocusScreen";*/
/* import { MultipleHooks } from "./03-examples/MultipleHooks";*/
/* import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";*/
/* import { HooksApp } from "../HooksApp"; */
/* import { CounterApp } from "./01-useState/CounterApp"; */
/* import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";*/
/* import { SimpleForm } from "./02-useEffect/SimpleForm";*/
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CallBackHook />
  </React.StrictMode>
);
