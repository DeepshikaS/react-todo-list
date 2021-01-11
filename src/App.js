import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Todolist from "./components/Todolist";
//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faTrash } from "@fortawesome/free-solid-svg-icons";

//library.add(faTrash);
class App extends Component {
  render() {
    return (
      <div className="App">
        <p></p>
        <Todolist />
      </div>
    );
  }
}

export default App;
