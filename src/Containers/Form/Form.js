import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateNotes } from '../../actions';
import { deleteNote } from '../../utils/fetchCalls/deleteNote';
import { saveNewNote } from '../../utils/fetchCalls/saveNewNote';
import { patchNote } from '../../utils/fetchCalls/patchNote';
import { getNotes } from '../../utils/fetchCalls/getNotes';
import { getCurrentNote } from '../../utils/fetchCalls/getCurrentNote';
import ListForm from '../../Components/ListForm/ListForm';
import TitleForm from '../../Components/TitleForm/TitleForm';

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      list: [],
      titleSet: false,
      redirectHome: false,
      editingNote: false,
      listText: ''
    }
  }

  componentDidMount = async () => {
    if(this.props.match.path !== '/new-note') {
      const { id } = this.props.match.params
      const url = `http://localhost:3000/api/v1/notes/${id}`
      const currentNote = await getCurrentNote(url)
      this.setState({
        title: currentNote.title,
        list: currentNote.listItems,
        editingNote: true
      })
    }
  }
    
  handleDelete = (e) => {
    const { id } = e.target
    id.length ? deleteNote(id) : this.handleRedirect()
  }

  setTitle = (title) => {
    this.setState({ title })
  }

  setList = (newText, index, id) => {
    let newList
    if(index) {
      let newListItem = { text: newText, completed: false, id }
      newList = Object.assign([], this.state.list, {[index]: newListItem})
    } else {
      let newListItem = { text: newText, completed: false }
      newList = [...this.state.list, newListItem]
    }
    
    this.setState({ list: newList })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  
  handleRedirect = () => {
    this.setState({
      title: '',
      list: [],
      titleSet: false,
      redirectHome: true
    })
  }
  
  createNote = async (event) => {
    const { title, list, redirectHome, editingNote } = this.state;
    event.preventDefault();
    let updated
    if (!editingNote) {
      updated = await saveNewNote(title, list);
    } else {
      await patchNote(title, list, this.props.match.params.id)
      updated = await getNotes();
    }
    this.setState({redirectHome: true})
    return this.props.updateNotes(updated);
  }

  displayTitle = () => {
    this.setState({ titleSet: true })
  }

  handleLiChange = (e) => {
    this.setState({listText: e.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.setList(this.state.listText)
    this.setState({listText: ''})
  }

  render() {
    const { title, list, titleSet, redirectHome } = this.state;
    let listItemsComponents = list.map((li, index) => {
      let i = index
      return <ListForm setList={this.setList} id={li.id} textValue={li.text} index={i} key={`list-form-${i}`}/>
    })

    if(redirectHome) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <section className='form'>
        <button 
          className='delete-list-btn' 
          onClick={this.handleDelete}
          >
          Delete List
        </button>
          { titleSet && (<h2 className='form-title'>{title}</h2>) }
          { !titleSet && <TitleForm setTitle={this.setTitle} existingTitle={title} displayTitle={ this.displayTitle }/> }
        <hr/>
        {listItemsComponents}
        {/* <ListForm setList={ this.setList } textValue={''} index={this.state.list.length}/> */}
        <form onSubmit={this.handleSubmit}>
          <input
            className='list-item-input'
            type='text'
            placeholder='add new'
            name='listItemInput'
            value={this.state.listText}
            onChange={this.handleLiChange}
          />
        </form>
        <button 
          className='cancel-btn'
          onClick={this.handleRedirect}
        >
          Cancel
        </button> 
        <button 
          className='save-btn'
          onClick={ this.createNote }>
            Save
        </button>
      </section>
    )
  }
}

Form.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateNotes: PropTypes.func.isRequired,
}

export const mapStateToProps = (state) => ({
  notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (notes) => dispatch(updateNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
