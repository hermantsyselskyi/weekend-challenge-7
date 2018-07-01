import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feedback from '../Feedback/Feedback';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Feedback />
        <br/>
      </div>
    );
  }
}

export default App;
