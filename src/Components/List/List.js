import React, { Component } from 'react';
import ListForm from '../ListForm/ListForm';
import ListItem from '../ListItem/ListItem';

class List extends Component {
  constructor() {
    super()

    this.state = {
      listItems: []
    }
  }

  addToList = (listItem) => {
    console.log(listItem)
    const newListItem = { text: listItem, id: Date.now()}
    this.setState({ listItems: [...this.state.listItems, newListItem] })
  }
  
  render() {
    const listItems = this.state.listItems.map(listItem => {
      return <ListItem {...listItem} />
    })

    return(
      <div>
        { listItems }
        <ListForm addToList={ this.addToList }/>
      </div>
    )
  }
}

export default List;