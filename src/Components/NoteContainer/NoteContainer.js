import React from 'react';
import List from '../../Containers/List/List'

const NoteContainer = (props) => {
  
  return(
    <div>
      <List setList={ props.setList }/>
    </div>
  )
}

export default NoteContainer;