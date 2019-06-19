import axios from 'axios';

const getPokemon = (query, callback) => {
  //TODO
  var url = `https://pokeapi.co/api/v2/pokemon/${query}/`;
  axios.get(url)
  .then(function(response) {
    callback(response.data);
  })
  .catch(function(error) {
    callback(error);
  })
}

export default getPokemon;