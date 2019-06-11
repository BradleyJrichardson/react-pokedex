import React from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
export default class AllPokemon extends React.Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    console.log(res);
    this.setState({ pokemon: res.data["results"] });
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div>
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>loading</h1>
        )}
      </div>
    );
  }
}
