import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    this.props.setList(this.state.text, this.props.index)
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
ListForm.propTypes = {
  setList: PropTypes.func.isRequired
}


export default ListForm;