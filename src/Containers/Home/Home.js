import React, { Component } from 'react';
import ListContainer from '../../Components/ListContainer/ListContainer'
import { Link } from 'react-router-dom'


export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      lists: []
    }
  }

  setList = (list) => {
    console.log('list', list)
    this.setState([...this.state.lists, list])

  }

  handleNewNoteClick = (e) => {
    
    this.props.history.push('/new-note')
  }

  render() {
    return (
      <main className='home'>
        <header>
          <h1>Trapper Keeper</h1>
          <Link
            to='/new-note'
            className='new-note-link'>
            <button
              className='new-note-btn'>
              New Note
            </button>
          </Link>
        </header>
          <ListContainer setList={this.setList} />
      </main>
    );
  }
}