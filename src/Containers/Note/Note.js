import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mockNotes } from '../../utils/mockData';

export class Note extends Component {

  render() {
    const { title, listItems } = mockNotes[0]
    const { text, id } = listItems
    const list = listItems.map(li => {
      return (
        <li className='list-item'>
          <input 
            type="checkbox" 
            className="checkbox" 
            id={`item-${id}`} 
            {...completed && 'checked'}
            value={listItems.text}
            onChange={() => this.handleCheckbox(id)}
            />
          <label 
            for={`item-${id}`} 
            contentEditable
            onChange={() => this.handleTextChange(id)}>
            {text}
        </label>
      </li>
      )
    })
    return (
      <article 
        className='note-card'>
        <h3>{title}</h3>
        
        
      </article>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
