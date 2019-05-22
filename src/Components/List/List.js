import React, { Component } from 'react';
import ListForm from '../ListForm/ListForm';
import ListItem from '../ListItem/ListItem';
import TitleForm from '../TitleForm/TitleForm';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      listItems: [],
      titleSet: false
    }
  }

  setTitle = (title) => {
    this.setState({ title: title, titleSet: true })
    this.stashList(this.state)
  }

  stashList = (list) => {
    console.log('test', this.state)
  }

  addToList = (listItem) => {
    const newListItem = { text: listItem, id: Date.now(), completed: false}
    this.setState({ listItems: [...this.state.listItems, newListItem] })
    this.props.setList(this.state)
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
        <h3>{ titleSection }</h3>
        { listItems }
        <ListForm addToList={ this.addToList }/>
      </div>
    )
  }
}

export default List;