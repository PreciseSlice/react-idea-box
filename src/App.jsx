import React, { Component } from 'react';
import './App.css';
import Input from './Input.jsx';
import Card from './Card.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardArray: [],
      cardData: {
        idea: 'myIdea', 
        body: 'blah blah blah',
        quality: 'swill'
      }
    };
  }
  
  render() {
    return (
      <div className="App">
      <Input />
      <Card cardData={this.state.cardData} />
      </div>
    );
  }
}

export default App;