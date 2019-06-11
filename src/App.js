import React from "react";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Pokedex} />
        <Route path="/pokemon" component={Pokemon} />
      </Router>
    </div>
  );
}

export default App;
