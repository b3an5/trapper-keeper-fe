import React from 'react';
import List from '../../Components/List/List'

const ListContainer = (props) => {
  

  return(
    <div>
      <List setList={ props.setList }/>
    </div>
  )
}

export default ListContainer;