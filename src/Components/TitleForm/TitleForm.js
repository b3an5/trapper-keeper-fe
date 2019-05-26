import React, {Component} from 'react';
import PropTypes from 'prop-types';


const TitleForm = (props) => {
  return (
    <form> 
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

TitleForm.propTypes = {
  setTitle: PropTypes.func.isRequired,
}


export default TitleForm;