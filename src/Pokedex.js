import React, { Component } from "react";
import Pokecard from "./Pokecard";

import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <p>Total Experience: {this.props.exp}</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p, i) => (
            <Pokecard
              key={i}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;

// props: id, name, type, exp
