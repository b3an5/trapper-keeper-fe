import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
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
      titleSet: false
    }
  }
    

  setTitle = (title) => {
    this.setState({ title })
    console.log(title)
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
  
  handleCancel = () => {
    console.log(this.props)
  }
  
  createNote = async (event) => {
    const { title, list } = this.state;
    event.preventDefault();
    const updated = await saveNewNote(title, list);
    this.props.history.push('/')
    return this.props.updateNotes(updated);
  }
// refactor to redirect

  displayTitle = () => {
    this.setState({ titleSet: true })
  }

  render() {
    const { title, list, titleSet } = this.state;
    let listItemsComponents = list.map((li, index) => {
      return <ListForm setList={this.setList} textValue={li.text} index={index+1} />
    })

    let titleSection

    
    return (
      <section className='form'>
        <button 
          className='delete-list-btn' 
          // onClick={this.deleteList}
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
