import * as ReactDOMClient from 'react-dom/client'
import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const root = ReactDOMClient.createRoot(document.getElementById("root"))
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
