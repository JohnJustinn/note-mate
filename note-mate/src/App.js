import React, { Component } from "react";
import "./App.css";
import ListForm from "./components/ListForm";
import Lists from "./components/Lists";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListForm />
        <Lists />
      </div>
    );
  }
}

export default App;
