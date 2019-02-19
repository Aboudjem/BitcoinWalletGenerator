import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleBar from "./SimpleBar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SimpleBar/>
          <SimpleBar/>
      </div>
    );
  }
}

export default App;
