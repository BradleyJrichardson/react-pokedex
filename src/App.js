import React from "react";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
