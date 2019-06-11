import React from "react";
import { getPokemon } from "../utils/api";
// import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";

export default class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      error: null
    };
  }
  componentDidMount() {
    getPokemon()
      .then(data => {
        this.setState({
          pokemon: data.results,
          error: null
        });
      })
      .catch(() => {
        console.warn("Error fetching pokemon");

        this.setState({
          error: `There was an error fetching the pokemon.`
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pokedex</h1>
        <div className="container grid">
          {this.state.pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
