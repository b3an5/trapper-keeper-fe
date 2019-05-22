import React, { Component } from 'react';
import ListForm from '../ListForm/ListForm';
import ListItem from '../ListItem/ListItem';
import TitleForm from '../TitleForm/TitleForm';

class List extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      listItems: [],

    }
  }

  setTitle = (title) => {
    this.setState({ title: title, titleSet: true })
  }

  addToList = (listItem) => {
    const newListItem = { text: listItem, id: Date.now()}
    this.setState({ listItems: [...this.state.listItems, newListItem] })
  }
  
  render() {
    const listItems = this.state.listItems.map(listItem => {
      return <ListItem {...listItem} />
    })

    let titleSection

    (this.state.titleSet) ? 
      titleSection = this.state.title :
      titleSection = <TitleForm setTitle={this.setTitle} />

    return(
      <div>
        { titleSection }
        { listItems }
        <ListForm addToList={ this.addToList }/>
      </div>
    )
  }
}

export default List;