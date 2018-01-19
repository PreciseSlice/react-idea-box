import React, { Component } from "react";
import "./styles/Input.css";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };

    this.inputTitle = this.inputTitle.bind(this);
    this.inputBody = this.inputBody.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  inputTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleBtnClick(e) {
    e.preventDefault();
    this.props.makeCard(this.state.title, this.state.body);
  }

  inputBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      this.handleBtnClick(e);
    }
  }

  render() {
    return (
      <div className="input">
        <input
          autoFocus
          id="title"
          onChange={this.inputTitle}
          onKeyPress={this.handleKeyPress}
          placeholder="Enter Idea Title"
        />

        <input
          id="body"
          onChange={this.inputBody}
          onKeyPress={this.handleKeyPress}
          placeholder="Enter Idea Body"
        />

        <button onClick={this.handleBtnClick}>Add Idea</button>
      </div>
    );
  }
}

export default Input;
