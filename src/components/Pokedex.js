import React from "react";
import { getPokemon } from "../utils/api";

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
          pokemon: data,
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
        <ul>
          {console.log(this.state.pokemon)}

          {this.state.pokemon.map(poke => (
            <li key={poke.name}>{poke.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
