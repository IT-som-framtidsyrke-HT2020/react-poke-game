import React, { Component } from "react";

class Pokecard extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex!</h1>
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;

// props: id, name, type, exp
