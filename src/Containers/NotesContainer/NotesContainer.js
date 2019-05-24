import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Note from '../Note/Note'
import { mockNotes } from '../../utils/mockData';


const NotesContainer = (props) => {
  const notes = mockNotes.map(note => {
    return (
      <Note title={note.title} listItems={note.listItems}/>
    )
  })
  return(
    <section className='notes-container'>
      {notes}
    </section>
  )
}

export const mapStateToProps = (state) => ({
  notes: state.notes || []
})

export default connect(mapStateToProps)(NotesContainer)
