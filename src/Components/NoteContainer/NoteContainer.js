import React from 'react';
import List from '../../Containers/List/List'

const NoteContainer = (props) => {
  const notes = 
  return(
    <section className='note-container'>
      
      <List setList={ props.setList }/>
    </section>
  )
}

export default NoteContainer;