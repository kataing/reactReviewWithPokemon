import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    // this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput} value={this.state.text} type="text" />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Search;