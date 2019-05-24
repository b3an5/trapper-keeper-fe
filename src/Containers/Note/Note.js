import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mockNotes } from '../../utils/mockData';
import { saveNote } from '../../actions/index'


export class Note extends Component {

  // componentDidMount

  render() {
    const { title, listItems } = this.props
    const list = listItems.map(li => {
      return (
        <li className='list-item'>
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
            for={`item-${li.id}`} 
            contentEditable
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
          className='delete-card-btn'>
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

const mapStateToProps = (state) => ({
    notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  saveNote: (notes) => dispatch(saveNote(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
