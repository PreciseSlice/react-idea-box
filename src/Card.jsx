import React, { Component } from "react";
import "./styles/Card.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <h3>{this.props.quality}</h3>
        <button className="upVote">Up</button>
        <button className="downVote">Down</button>
        <button
          className="delete"
          onClick={() => this.props.delete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Card;
