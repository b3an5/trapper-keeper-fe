import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { updateNotes, toggleCompletedLi } from '../../actions/index'
import { deleteNote } from '../../utils/fetchCalls/deleteNote';
import checkbox from '../../images/completed-icon.svg'
import edit from '../../images/edit-icon.svg'
import trash from '../../images/trash-icon.svg'
import addNew from '../../images/add-new-icon.svg'
import remove from '../../images/remove-icon.svg'
import { patchNote } from '../../utils/fetchCalls/patchNote';


export class Note extends Component {

  componentDidUpdate() {
    setTimeout(() => {
      patchNote(this.props.title, this.props.listItems, this.props.id)
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
          onClick={() => this.props.toggleCompletedLi(li)}
          className='completed-li'>
          <img 
            src={checkbox} 
            alt='checked checkbox' 
            className='checked-icon'
            />
          <p className='completed-li-text list-text'>
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
            className="note-complete-btn round-btn"
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
        <header className='card-header'>
          <h3 className='note-heading'>
            {title}
          </h3>
          <button
            className='delete-card-btn delete-btn'
            onClick={this.deleteCard}>
            <img 
              src={ trash }
              alt=''
              className='trash-icon'
            />
          </button>
        </header>
        {incompleteList.length === 0 && 
        <p className='empty-list-message'>You completed everything on your list! Cheers!</p>
        }
        <ul className='incomplete-ul'>
          { incompleteList }
        <Link to={`/notes/${id}`}>
          <div className='add-wrapper'>
            <img
              src={ addNew }
              className='add-new-icon round-btn'
              alt=''/>
            <p className='add-new-text'>Add New</p>
          </div>
        </Link>
        </ul>
        { completeList[0] && 
          <h5 className='complete-heading'>
            complete
          </h5> }
        
        <ul className='complete-ul'>

          {completeList}
        </ul>
        <div className='edit-wrapper'>
          <Link to={`/notes/${ id }`}>
            <img 
              src={ edit } 
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
  id: PropTypes.number,
  listItems: PropTypes.arrayOf(PropTypes.object),
  notes: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  updateNotes: PropTypes.func,
}

export const mapStateToProps = (state) => ({
    notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (notes) => dispatch(updateNotes(notes)),
  toggleCompletedLi: (li) => dispatch(toggleCompletedLi(li))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
