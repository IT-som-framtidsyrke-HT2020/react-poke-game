import React, { Component } from "react";
import Pokegame from "./Pokegame";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}

export default App;

// 1. app => browsern
// 2. Pokegame
// 3. Pokedex
// 4. Pokecard

/*
In this task you need to inlcude 3 components. Include the
following:

App - App should only render a single component

Pokecard - This component should show a single pokemon

Pokedex - This component should be provided via props an array
of objects that describes different pokemon cards. Use default
props for this task and render the different pokemon cards by
using a loop.

A pokecard should have the props:
- id
- name
- type
- exp
*/
