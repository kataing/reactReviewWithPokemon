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
  }
  
  componentDidMount() {
    this.setState({pokemon: this.props.pokemon});
  }

  render() {
    return (
      <div>
        <Search />
        <PokemonList pokemon={this.props.pokemon}/>
      </div>
    )
  }
}

export default App;