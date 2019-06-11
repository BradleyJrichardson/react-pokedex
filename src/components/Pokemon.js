import React from "react";
import { getSinglePokemon } from "../utils/api";
export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Singlepokemon: [],
      error: null
    };
  }

  componentDidMount() {
    getSinglePokemon(this.props.location.search.replace("?", ""))
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
        {console.log(this.state.Singlepokemon)}
        <h1>Pokemon</h1>
        <div className="container">
          <h1>here</h1>
        </div>
      </React.Fragment>
    );
  }
}
