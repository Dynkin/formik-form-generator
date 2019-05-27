import React from "react";
import ReactDOM from "react-dom";

import { ExampleForm } from "./ExampleForm/ExampleForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ExampleForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
