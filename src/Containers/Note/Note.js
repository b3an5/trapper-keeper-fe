import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { updateNotes, toggleCompletedLi } from '../../actions/index'
import { deleteNote } from '../../utils/fetchCalls/deleteNote';
import checkbox from '../../images/completed-icon.svg'
import checkboxHover from '../../images/completed-hover-icon.svg'
import edit from '../../images/edit-icon.svg'
import remove from '../../images/remove-icon.svg'


export class Note extends Component {

  // componentDidMount
  // patchNotes = async () => {
  //   try {
  //     const url = 'http://localhost:3000/api/v1/notes'
  //     const response = await fetch(url, {
  //       method: 'PATCH',
  //       body: JSON.stringify({
  //         title,
  //         listItems
  //       }),
  //       headers: {
  //         'content-type': 'application/json'
  //       }
  //     })
  //     return await response.json()
  //   } catch (e) {

  //     throw new Error(e, 'Unable to save note')
  //   }
  // }

  deleteCard = async () => {
    try {
      const notes = await deleteNote(this.props.id);
      return this.props.updateNotes(notes);
    } catch (e) { 
      throw Error('Failed to delete list') }
    }


  render() {
    const { title, listItems, id } = this.props
    const validItems = listItems.filter(li => li !== null)
    const completeListItems = validItems.filter(li => li.completed === true);
    const incompleteListItems = validItems.filter(li => li.completed === false);
    const completeList = completeListItems.map((li, i) => {
      let key = i + 1
      return (
        <li 
          key={`${key}_${li.text}`}
          id={`item-${li.id}`} 
          className='completed-li'>
          <img 
            src={checkbox} 
            alt='checked checkbox' 
            className='checked-icon'
            onClick={() => this.props.toggleCompletedLi(li)}
            />
          <p className='completed-li-text'>
            {li.text}
          </p>
        </li>
      ) 
    })
    const incompleteList = incompleteListItems.map(li => {
      return (
        <li 
          className='incomplete-li'
          id={`item-${li.id}`} >
          <button 
            className="note-complete-btn"
            id={`${li.id}-btn`} 
            onClick={() => this.props.toggleCompletedLi(li)}>
              <img 
                src={checkbox}
                alt=''
                className='checkbox-hover' 
              />
          </button>
          <label 
            className='list-text'
            htmlFor={`${li.id}-btn`} >
            {li.text}
          </label>
          <button
          className='delete-li-btn'
          // onClick={this.deleteLi}
          >
          <img 
            src={remove}
            alt=''
            className='remove-icon'
          />
          </button>
        </li>
      ) 
    })
    return (
      <article 
        className='note-card'>
        <h3 className='list-title'>
          {title}
        </h3>
        <button
          className='delete-card-btn delete-btn'
          onClick={this.deleteCard}>
            x
        </button>
        <ul className='incomplete-ul'>
          {incompleteList}
        </ul>
        <h5 className='complete-heading'>complete</h5>
        <ul className='complete-ul'>
          {completeList}
        </ul>
        <div className='edit-wrapper'>
          <Link to={`/notes/${id}`}>
            <img 
              src={edit} 
              className='edit-note-icon' 
              alt='Link to edit this note' 
              role='button'/>
          </Link>
        </div>
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
