import React, { Component } from "react";
import "./styles/App.css";
import Header from "./Header.jsx";
import StoredCards from "./StoredCards.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardArray: []
    };
    this.makeCard = this.makeCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  makeCard(title, body) {
    let newCard = {
      title: title,
      body: body,
      quality: "Swill",
      id: Date.now()
    };

    localStorage.setItem(newCard.id.toString(), JSON.stringify(newCard));

    let newCardArray = this.state.cardArray;

    newCardArray.push(newCard);
    this.setState({
      cardArray: newCardArray
    });
  }

  deleteCard(id) {
    localStorage.removeItem(id);

    const index = this.state.cardArray.findIndex(card => card.id === id);

    this.state.cardArray.splice(index, 1);

    const newArray = this.state.cardArray;

    this.setState({
      cardArray: newArray
    });
  }

  componentDidMount() {
    if (localStorage) {
      const newCardArray = this.state.cardArray;

      Object.keys(localStorage).forEach(id => {
        let newCard = JSON.parse(localStorage.getItem(id));

        newCardArray.push(newCard);
      });

      this.setState({
        cardArray: newCardArray
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header makeCard={this.makeCard} />
        <StoredCards
          cardArray={this.state.cardArray}
          delete={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
