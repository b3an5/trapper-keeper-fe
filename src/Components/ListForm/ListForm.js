import React, { Component } from 'react';
import PropTypes from 'prop-types';
import checkboxHover from '../../images/completed-hover-icon.svg'


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
        <button 
            className="form-complete-btn complete-btn">
            {/* // onClick={() => this.props.toggleCompletedLi(li)}> */}
              <img 
                src={checkboxHover}
                alt=''
                className='checkbox-hover'
              />
          </button>
        <input
          className='list-item-input'
          type='text'
          autoFocus
          placeholder='add new'
          name='listItem'
          value={ this.props.textValue }
          onChange={ this.handleChange }
        />
        <button className='lf-delete-btn round-btn btn'>x</button>
      </form>
    )
  }

}
ListForm.propTypes = {
  // index, autoFocus
  setList: PropTypes.func.isRequired
}


export default ListForm;