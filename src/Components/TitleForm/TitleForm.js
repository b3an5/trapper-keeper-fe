import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TitleForm extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.props.setTitle(event.target.value)
  }

  render() {
    return (

      <form 
        onSubmit={this.props.displayTitle}>
        <input
          type='text'
          className='title-input'
          placeholder='Title'
          name='title'
          value={this.state.text}
          onChange={ this.handleChange }
        />
        <button className='add-btn'>+</button>
      </form>
    )
  }
}

TitleForm.propTypes = {
  setTitle: PropTypes.func.isRequired,
  displayTitle: PropTypes.func.isRequired,
}


export default TitleForm;