import React, { Component } from "react";
import CardList from "./components/CardList";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Liste de Card</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
