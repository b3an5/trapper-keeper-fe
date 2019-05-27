import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { updateNotes } from '../../actions';
import { deleteNote } from '../../utils/fetchCalls/deleteNote'
import { saveNewNote } from '../../utils/fetchCalls/saveNewNote'
import ListForm from '../../Components/ListForm/ListForm';
import TitleForm from '../../Components/TitleForm/TitleForm';

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      list: [],
      titleSet: false,
      redirectHome: false
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
    const { title, list, redirectHome } = this.state;
    event.preventDefault();
    const updated = await saveNewNote(title, list);
    this.setState({redirectHome: true})
    return this.props.updateNotes(updated);
  }

  displayTitle = () => {
    this.setState({ titleSet: true })
  }

  render() {
    const { title, list, titleSet, redirectHome } = this.state;
    let listItemsComponents = list.map((li, index) => {
      let i = index + 1
      return <ListForm setList={this.setList} textValue={li.text} index={i} key={`list-form-${i}`}/>
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
          { !titleSet && <TitleForm setTitle={this.setTitle} displayTitle={ this.displayTitle }/> }
        <hr/>
        <ListForm setList={ this.setList } index={0}/>
        {listItemsComponents}
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
