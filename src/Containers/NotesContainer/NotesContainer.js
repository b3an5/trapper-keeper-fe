import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Note from '../Note/Note'
import { mockNotes } from '../../utils/mockData';
import { saveNote } from '../../actions/index'


class NotesContainer extends Component  {

  componentDidMount = async () => {
    // break this into api file
    const response = await fetch('http://localhost:3000/api/v1/notes')
    const result = await response.json()
    this.props.saveNote(result)
  }

  render() {
    const notes = this.props.notes.map(note => {
      return (
        <Note title={note.title} listItems={note.listItems} id={note.id}/>
      )
    })
    return(
      <section className='notes-container'>
        {notes}
      </section>
    )
  }
  }


export const mapStateToProps = (state) => ({
  notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  saveNote: (notes) => dispatch(saveNote(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
