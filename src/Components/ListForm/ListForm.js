import React, { Component } from 'react';

class ListForm extends Component {
  constructor() {
    super()

    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToList(this.state.text)
    // this.setState({ text: '' })
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            type='text'
            placeholder='Words'
            name='listItem'
            value={ this.state.text }
            onChange={ this.handleChange }
          />
          <button>+</button>
        </form>
      </div>
    )
  }
}

export default ListForm;