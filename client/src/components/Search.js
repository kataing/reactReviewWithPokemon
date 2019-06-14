import React from 'react';

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
    console.log(this.state.value);
  }
  
  render () {
    return(
      <div>
        <form action="" >
          <input onChange={this.handleInput} type="text" />
          <button onClick={this.handleSubmit}>button</button>
        </form>
      </div>
    );
  }
}

export default Search;