import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateNotes } from '../../actions/index'
import { deleteNote } from '../../utils/fetchCalls/deleteNote';


export class Note extends Component {

  // componentDidMount

  deleteCard = async () => {
    try {
      const notes = await deleteNote(this.props.id);
      return this.props.updateNotes(notes);
    } catch (e) { 
      throw Error('Failed to delete list') }
  }

  render() {
    const { title, listItems } = this.props
    const list = listItems.map((li, i) => {
      let key = i + 1
      if (li === null) {
        return (<li>''</li>)
      }
      return (
        <li 
          key={`${key}_${li.text}`}
          className='list-item'>
          <input 
            type="checkbox" 
            className="checkbox" 
            id={`item-${li.id}`} 
            {...li.completed && 'checked'}
            // value={li.text}
            // onChange={() => this.handleCheckbox(li.id)}
            />
          <label 
            className='list-text'
            htmlFor={`item-${li.id}`} 
            onChange={() => this.handleTextChange(li.id)}>
            {li.text}
        </label>
      </li>
      )
    })
    return (
      <article 
        className='note-card'>
        <button
          className='delete-card-btn'
          onClick={this.deleteCard}>
            X
        </button>
        <h3 className='list-title'>
          {title}
        </h3>
        <ul className='card-list'>
          {list}
        </ul>
      </article>
    )
  }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  updateNotes: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (notes) => dispatch(updateNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
