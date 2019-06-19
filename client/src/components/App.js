//TODO
import React from 'react';

import PokemonList from './PokemonList';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
    this.addSearchedPokemon = this.addSearchedPokemon.bind(this);
  }

  addSearchedPokemon(pokemon) {
    let newPokemon = [...this.state.pokemon];
    newPokemon.push(pokemon);
    this.setState({
      pokemon: newPokemon
    })
  }

  componentDidMount() {
    this.setState({
      pokemon: this.props.pokemon
    })
  }

  render() {
    return (
      <div>
        <Search addSearchedPokemon={this.addSearchedPokemon}/>
        <PokemonList pokemon={this.state.pokemon}/>
      </div>
    )
  }
};

export default App;