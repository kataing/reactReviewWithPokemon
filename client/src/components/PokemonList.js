//TODO
import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = (props) => {
  return (
    <div id="pokemonList">
    {props.pokemon.map((poke, index) => (
      <PokemonListItem key={index} poke={poke}/>
    ))}
    </div>
  );
}

export default PokemonList;