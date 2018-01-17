import React, { Component } from 'react';
import './Card.css';

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
      </div>
    );
  }
} 

export default Card;