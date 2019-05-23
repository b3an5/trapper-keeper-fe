import React from 'react';
import List from '../List/List'

const NotesContainer = (props) => {
  // const notes = 
  return(
    <section className='notes-container'>
      
      <List setList={ props.setList }/>
    </section>
  )
}

export default NotesContainer;