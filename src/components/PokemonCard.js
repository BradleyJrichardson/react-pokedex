import React from "react";

export default class PokemonCard extends React.Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: "",
    isLoading: true
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    console.log(pokemonIndex);
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    console.log(imageUrl);

    this.setState({ name, imageUrl, pokemonIndex });
  }

  render() {
    return (
      <div>
        <h1>
          {" "}
          {this.state.name
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ")}
        </h1>
        <h3>{this.state.pokemonIndex}</h3>
        <div>
          <img className="avatar" src={this.state.imageURL} alt="" />
        </div>
      </div>
    );
  }
}
