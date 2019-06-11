import React from "react";
import { getPokemon } from "../utils/api";
import { Link } from "react-router-dom";

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
          {this.state.pokemon.map((poke, index) => (
            <Link to={`pokemon?${index + 1}`}>
              <div className="pokedex-container">
                <div key={index + 1}>
                  <h4 className="card-heading">{poke.name}</h4>
                  <img
                    className="pokedex-image"
                    // src={`https://img.pokemondb.net/artwork/${poke.name}.jpg`}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
                      1}.png`}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
