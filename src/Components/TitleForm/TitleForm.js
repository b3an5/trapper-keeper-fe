import React, {Component} from 'react';
import PropTypes from 'prop-types';


const TitleForm = (props) => {
  return (
    <form 
      className='title-form border-bottom'
      onSubmit={ props.displayTitle }> 
      <button className='add-btn'>+</button>
      <input
        type='text'
        autoFocus
        className='title-input'
        placeholder='Title'
        name='title'
        onChange={ (event) => { props.setTitle(event.target.value) } }
      />
    </form>
  )
}

TitleForm.propTypes = {
  setTitle: PropTypes.func.isRequired,
  displayTitle: PropTypes.func.isRequired,
}


export default TitleForm;