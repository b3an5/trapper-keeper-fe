import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mockNotes } from '../../utils/mockData';
import { updateNotes, toggleCompletedLi } from '../../actions/index'


export class Note extends Component {

  // componentDidMount

  deleteCard = async () => {
    console.log(this.props)
    try {
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

  //need to make a thunk
  saveNewNotesToStore = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/notes');
      const results = await response.json();
      console.log('nore', results)
      return this.props.updateNotes(results);
    }
    catch (error) {
      return console.log(error);
    }
  }

  render() {
    const { title, listItems } = this.props
    const completeListItems = listItems.filter(li => li.completed === true)
    const incompleteListItems = listItems.filter(li => li.completed === false)
    const completeList = completeListItems.map(li => {
      return (
        <li className='complete-list-item'>
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
            contentEditable
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
