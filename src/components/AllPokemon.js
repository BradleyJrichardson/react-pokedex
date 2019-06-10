import React from "react";
import axios from "axios";

export default class AllPokemon extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
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
          <Loading />
        )}
      </div>
    );
  }
}
