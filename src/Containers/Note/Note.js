import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateNotes, toggleCompletedLi } from '../../actions/index'
import { deleteNote } from '../../utils/fetchCalls/deleteNote';
import { patchNotes } from '../../utils/fetchCalls/patchNote';


export class Note extends Component {

  componentDidUpdate() {
    setTimeout(() => {
      patchNotes(this.props.title, this.props.listItems, this.props.id)
    }, 1000);
}

  deleteCard = async () => {
    try {
      const notes = await deleteNote(this.props.id);
      return this.props.updateNotes(notes);
    } catch (e) { 
      throw Error('Failed to delete list') }
    }


  render() {
    const { title, listItems } = this.props
    const validItems = listItems.filter(li => li !== null)
    console.log(validItems)
    console.log(listItems)
    const completeListItems = validItems.filter(li => {
      console.log(li.completed)
      return li.completed === true
    })
    const incompleteListItems = validItems.filter(li => li.completed === false)
    const completeList = completeListItems.map((li, i) => {
      let key = i + 1
      return (
        <li 
          key={`${key}_${li.text}`}
          className='complete-list-item'>
          <input 
            type="checkbox" 
            className="checkbox" 
            id={`item-${li.id}`} 
            {...li.completed && 'checked'}
            // value={li.text}
            onClick={() => this.props.toggleCompletedLi(li)}
            />
          {/* <h1
            // type="checkbox" 
            // className="checkbox" 
            // id={`item-${li.id}`} 
            // {...li.completed && 'checked'}
            // value={li.text}
            // onChange={() => this.handleCheckbox(li.id)}
            onClick={() => this.props.toggleCompletedLi(li)}
          >X</h1> */}
          <label 
            className='list-text'
            for={`item-${li.id}`} 
            onChange={() => this.handleTextChange(li.id)}>
            {li.text}
          </label>
        </li>
      ) 
    })
    const incompleteList = incompleteListItems.map(li => {
      return (
        <li className='incomplete-list-item'>
          <input 
            type="checkbox" 
            className="checkbox" 
            id={`item-${li.id}`} 
            {...li.completed && 'checked'}
            value={li.text}
            // onChange={() => this.handleCheckbox(li.id)}
            onClick={() => this.props.toggleCompletedLi(li)}
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
        <h5>incomplete</h5>
        <ul className='card-list'>
          {incompleteList}
        </ul>
        <h5>complete</h5>
        <ul className='card-list'>
          {completeList}
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
  updateNotes: (notes) => dispatch(updateNotes(notes)),
  toggleCompletedLi: (li) => dispatch(toggleCompletedLi(li))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
