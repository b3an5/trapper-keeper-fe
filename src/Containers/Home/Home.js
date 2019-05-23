import React, { Component } from 'react';
import NoteContainer from '../../Components/NoteContainer/NoteContainer'
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
        <header className='header'>
          <h1>Trapper Keeper</h1>
        </header>
          <Link
            to='/new-note'
            className='new-note-link'>
            <button
              className='new-note-btn'>
              New Note
            </button>
          </Link>
          <NoteContainer setList={this.setList} />
      </main>
    );
  }
}