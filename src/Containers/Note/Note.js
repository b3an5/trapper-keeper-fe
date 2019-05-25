import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mockNotes } from '../../utils/mockData';
import { saveNote } from '../../actions/index'


export class Note extends Component {

  // componentDidMount

  deleteCard = async () => {
    try {
      debugger
      const response = await fetch(`http://localhost:3000/api/v1/notes/${this.props.id}`, {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: {
          'content-type': 'application/json'
        }
      })
      const result = await response.json()
      console.log(result)
      this.saveNewNotesToStore()
    } catch (e) { console.log(e) }
  }

  //need to make a thunk
  saveNewNotesToStore = () => {
    fetch('http://localhost:3000/api/v1/notes')
      .then(response => response.json())
      .then(results => this.props.saveNote(results))
      .catch(error => console.log(error))
  }

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

const mapStateToProps = (state) => ({
    notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  saveNote: (notes) => dispatch(saveNote(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
