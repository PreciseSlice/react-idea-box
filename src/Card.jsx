import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.cardData.idea}</h3>
        <p>{this.props.cardData.body}</p> 
        <h3>{this.props.cardData.quality}</h3>
        <button className="upVote">Up</button>
        <button className="downVote">Down</button>
      </div>
    );
  }
} 

export default Card;