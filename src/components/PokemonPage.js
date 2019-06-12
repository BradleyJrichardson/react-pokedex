import React from "react";

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let name = this.props.data.name;
    let height = this.props.data.height;
    let weight = this.props.data.weight;
    let front_image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      this.props.data.id
    }.png`;
    let back_image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
      this.props.data.id
    }.png`;
    let types = this.props.data.types;
    console.log(types);
    console.log(this.props.data);

    return (
      <React.Fragment>
        <div className="container">
          <h1>{name}</h1>
          <img className="pokemon-image" src={back_image} alt="" />
          <img className="pokemon-image" src={front_image} alt="" />
          <div>Height: {height}</div>
          <div>Weight: {weight}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonPage;
