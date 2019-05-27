import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Note from '../Note/Note'
import { getNotes } from '../../utils/fetchCalls/getNotes'
import { updateNotes } from '../../actions/index'


export class NotesContainer extends Component  {

  componentDidMount = async () => {
    const notes = await getNotes();
    this.props.updateNotes(notes)  
  }

  render() {
    const notes = this.props.notes.map((note, i) => {
      return (
        <Note 
          title={note.title} 
          listItems={note.listItems} id={note.id}
          key={`00${i}_${note.title}`}/>
      )
    })
    return(
      <section className='notes-container'>
        {notes}
      </section>
    )
  }
}

NotesContainer.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateNotes: PropTypes.func.isRequired,
}


export const mapStateToProps = (state) => ({
  notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (notes) => dispatch(updateNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
