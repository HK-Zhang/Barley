import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div className="todo">
          <Header />
          <Input />
          <List />
        </div>
      </header>
    </div>
  );
}

export default App;
