import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateNotes, setCurrentNote } from '../../actions';
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
      loading: false
    }
  }

  componentDidMount = async () => {
    const { setCurrentNote } = this.props;
    const { id } = this.props.match.params
    const url = `http://localhost:3000/api/v1/notes/${id}`
    if(this.props.match.path !== '/new-note') {
      this.setState({
        loading: true,
        editingNote: true,
        titleSet: true
      })
      const note = await getCurrentNote(url);
      return setCurrentNote(note);
    }
  }


    
  handleDelete = (e) => {
    const { id } = e.target
    id.length ? deleteNote(id) : this.handleRedirect()
  }

  setTitle = (title) => {
    this.setState({ title })
  }

  setList = (newText, index) => {
    let newListItem = { text: newText, index }
    let newList = Object.assign([], this.state.list, {[index]: newListItem})
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

  getLiComponents = () => {

    let list = this.props.currentNote.listItems

    let listForms 
    if(list !== undefined) {
      listForms = list.map((li, index) => {
        let i = index + 1
        return (
          <ListForm 
            setList={this.setList} 
            autoFocus='autoFocus'
            textValue={li.text} 
            index={i} 
            key={`list-form-${i}`}/>
        )
      }) 
      return listForms;
    }
  }

  render() {
    const { titleSet, redirectHome, editingNote } = this.state;
    const { title, listItems } = this.props.currentNote
    const listItemsComponents = this.getLiComponents()

    if(redirectHome) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <section className='form'>
        { !titleSet && !editingNote && (
           <TitleForm 
            setTitle={this.setTitle}
            existingTitle={title} 
            displayTitle={ this.displayTitle }/> 
          )}
         { titleSet && 
          <>
            <button onClick={this.handleDelete}>
              Delete List
            </button>
            <TitleForm 
              setTitle={this.setTitle}
              existingTitle={title} 
              displayTitle={ this.displayTitle }/> 
          </>
          // {/* <h2 className='form-heading border-bottom'>{title}</h2> */}
         }
        { listItemsComponents !== undefined && listItemsComponents[0] && listItemsComponents}
        <ListForm 
          setList={ this.setList }
          index={0}/> 
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
  notes: PropTypes.arrayOf(PropTypes.object),
  updateNotes: PropTypes.func,
}

export const mapStateToProps = (state) => ({
  notes: state.notes || [],
  currentNote: state.currentNote
})

export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (notes) => dispatch(updateNotes(notes)),
  setCurrentNote: (note) => dispatch(setCurrentNote(note))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
