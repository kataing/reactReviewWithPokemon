import React from 'react';
import getPokemon from '../../../lib/getPokemon.js'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    getPokemon(this.state.value, this.props.addSearchedPokemon)
    this.setState({
      value: ''
    })
  }
  
  render () {
    return(
      <div>
        <form action="" >
          <input onChange={this.handleInput} value={this.state.value} type="text" />
          <button onClick={this.handleSubmit}>submit</button>
        </form>
      </div>
    );
  }
}

export default Search;