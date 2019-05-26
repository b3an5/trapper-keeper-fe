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
      <form onSubmit={ this.handleSubmit }>
        <input
          className='list-item-input'
          type='text'
          autoFocus='true'
          placeholder='add new'
          name='listItem'
          value={ this.state.text }
          onChange={ this.handleChange }

        />
        <button className='add-btn'>+</button>
      </form>
    )
  }
}
ListForm.propTypes = {
  setList: PropTypes.func.isRequired
}


export default ListForm;