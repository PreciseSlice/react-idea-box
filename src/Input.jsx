import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = { 
      input: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleBtnClick () {
      this.setState({ input: this.state.input });
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleBtnClick();
    }
  }

  render() {
    return (
      <div className='input'>
        
        <input 
          autoFocus
          id="userInput"
          value={this.state.input}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Enter Idea"
        />

        <button onClick={this.handleBtnClick}>Add Idea</button>
      
      </div>
    )
  }
}

export default Input;