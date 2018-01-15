import React, { Component } from 'react';
import './App.css';
import Input from './Input.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardArray: []
    };
  }
  render() {
    return (
      <div className="App">
      <Input />
      </div>
    );
  }
}

export default App;