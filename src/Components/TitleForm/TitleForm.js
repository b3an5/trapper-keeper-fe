import React, {Component} from 'react';
import PropTypes from 'prop-types';


const TitleForm = (props) => {
  if(props.existingTitle !== '') {
    return (
      <form onSubmit={ props.displayTitle }> 
        <button className='add-btn'>+</button>
        <input
          type='text'
          className='title-input'
          placeholder='Title'
          name='title'
          value={props.existingTitle}
          onChange={ (event) => { props.setTitle(event.target.value) } }
        />
      </form>
    )
  } else {
      return (
        <form onSubmit={ props.displayTitle }> 
          <button className='add-btn'>+</button>
          <input
            type='text'
            className='title-input'
            placeholder='Title'
            name='title'
            onChange={ (event) => { props.setTitle(event.target.value) } }
          />
        </form>
      )
  }
}

TitleForm.propTypes = {
  setTitle: PropTypes.func.isRequired,
  displayTitle: PropTypes.func.isRequired,
}


export default TitleForm;