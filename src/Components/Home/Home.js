import React from 'react'
import NotesContainer from '../../Containers/NotesContainer/NotesContainer'
import { Link } from 'react-router-dom'
import addNew from '../../images/add-list.svg'


const Home = () => {
    return (
      <main className='home'>
        <header className='header'>
          <h1>Trapper Keeper</h1>
          <div className='new-note-wrapper'>
            <Link
              to='/new-note'
              className='new-note-link'>
              <button
                className='new-note-btn'>
                <img
                  src={addNew}
                  className='add-new-icon'
                  alt=''/>
                New Note
              </button>
            </Link>
          </div>
        </header>
        <NotesContainer />
      </main>
    );
  }

  export default Home;