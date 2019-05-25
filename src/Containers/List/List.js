import React, { Component } from 'react';
import ListForm from '../../Components/ListForm/ListForm';
import ListItem from '../../Components/ListItem/ListItem';
import TitleForm from '../../Components/TitleForm/TitleForm';
import { updateNotes } from '../../actions/index';
import { connect } from 'react-redux';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      listItems: [],
      titleSet: false
    }
  }

  setTitle = async (title) => {
    await this.setState({ title: title, titleSet: true }) 
    this.props.updateNotes(this.state.title, this.state.listItems);
  }

  addToList = async (listItem) => {
    const newListItem = { text: listItem, id: Date.now(), completed: false}
    await this.setState({ listItems: [...this.state.listItems, newListItem] }) 
    this.props.updateNotes(this.state.title, this.state.listItems);
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



export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (title, listItems) => dispatch(updateNotes(title, listItems))
})

export default connect(null, mapDispatchToProps)(List)