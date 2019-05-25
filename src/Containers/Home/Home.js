import React from 'react'
import NoteContainer from '../NotesContainer/NotesContainer'
import { Link } from 'react-router-dom'

const Home = () => {
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
          <NoteContainer />
      </main>
    );
  }

  export default Home;