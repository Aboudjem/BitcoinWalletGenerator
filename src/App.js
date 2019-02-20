import React, { Component } from 'react';

import './App.css';
import SimpleBar from "./SimpleBar";
import Title from "./Main"
import Panel from "./Panel"

class App extends Component {
  render() {
    return (
      <div className="App">
          <SimpleBar/>
          <Title/>
          <Panel/>
      </div>
    );
  }
}

export default App;
