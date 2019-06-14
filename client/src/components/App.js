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
    this.setState({
      pokemon: this.props.pokemon
    }, () => {console.log(this.state.pokemon)})
  }

  render() {
    return (
      <div>
        <Search />
        <PokemonList pokemon={this.state.pokemon}/>
      </div>
    )
  }
};

export default App;