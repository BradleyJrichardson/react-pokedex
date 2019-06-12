export function getPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
    .then(res => res.json())
    .then(data => {
      return data;
    });
}

export function getSinglePokemon(index) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}
