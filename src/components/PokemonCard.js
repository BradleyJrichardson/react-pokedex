import React from "react";
import { Link } from "react-router-dom";

export default class PokemonCard extends React.Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;

    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <Link to={`pokemon/${this.state.pokemonIndex}`}>
          <div>{this.state.pokemonIndex}</div>
          <img src={this.state.imageUrl} alt="" />
          <h6 className="card-title">
            {this.state.name
              .toLowerCase()
              .split(" ")
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
          </h6>
        </Link>
      </div>
    );
  }
}
