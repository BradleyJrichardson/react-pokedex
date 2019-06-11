import React from "react";

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pokemonIndex: "",
      imageUrlFront: "",
      imageUrlback: "",
      types: [],
      description: "",
      stats: {
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        specialAttack: "",
        specialDefense: ""
      },
      height: "",
      weight: "",
      abilities: ""
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="container">
          <h1>{this.props.data.name}</h1>
          <div>{this.props.data.height}</div>
          {/* <div>{this.props.data.types.type.name}</div> */}
          <img
            className="pokemon-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
              this.props.data.id
            }.png`}
            alt=""
          />
          <img
            className="pokemon-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              this.props.data.id
            }.png`}
            alt=""
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonPage;
