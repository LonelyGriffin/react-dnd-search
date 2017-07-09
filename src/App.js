import React, { Component } from 'react';
import {Knight} from "./Knight";
import "./App.css";
import {Square} from "./Square";

class App extends Component {
  render() {
    return (
      <div >
        <Square/>
        <Square isWhite={true}/>
      </div>
    );
  }
}

export default App;
