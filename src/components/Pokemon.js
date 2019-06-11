import React from "react";
import { getSinglePokemon } from "../utils/api";
import PokemonPage from "./PokemonPage";

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Singlepokemon: [],
      error: null
    };
  }

  componentDidMount() {
    getSinglePokemon(this.props.match.params.pokemonIndex)
      .then(data => {
        this.setState({
          Singlepokemon: data,
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
        <h1>Pokemon</h1>
        <PokemonPage data={this.state.Singlepokemon} />
      </React.Fragment>
    );
  }
}
