//TODO
import React from 'react';

var PokemonListItem = (props) => {
  return (
    <div className="pokemonItem">
      <div>Name: {props.poke.name}</div>
      <div>Id: {props.poke.id}</div>
      <img src={props.poke.sprites.front_default} alt="pokemon image"/> 
    </div>
  );
}

export default PokemonListItem;