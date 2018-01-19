import React, { Component } from "react";
import Card from "./Card.jsx";

class StoredCards extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
    this.inputSearch = this.inputSearch.bind(this);
  }

  inputSearch(e) {
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    });
  }

  render() {
    return (
      <div className="store-cards">
        <input id="search" placeholder="Search" onChange={this.inputSearch} />
        {this.props.cardArray.map((card, i) => {
          let title = card.title.toLowerCase();
          let body = card.body.toLowerCase();

          if (
            title.includes(this.state.searchTerm) ||
            body.includes(this.state.searchTerm)
          ) {
            return (
              <Card
                title={card.title}
                body={card.body}
                quality={card.quality}
                key={i}
                id={card.id}
                delete={this.props.delete}
                upVote={this.props.upVote}
                downVote={this.props.downVote}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}

export default StoredCards;
