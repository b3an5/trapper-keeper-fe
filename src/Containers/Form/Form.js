import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getNotes } from '../../utils/fetchCalls/getNotes'
import { saveNewNote } from '../../utils/fetchCalls/saveNewNote'
// import ListItem from '../ListItem';
import ListForm from '../../Components/ListForm/ListForm';
import TitleForm from '../../Components/TitleForm/TitleForm';
import { updateNotes } from '../../actions/index'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      list: [],
      titleSet: false
    }
  }
    
  // handleSubmit = (e) => {
  //   const { title, list } = this.state;
  //   e.preventDefault();
  //   this.props.updateNotes(title, list)
  //   this.props.history.push('/');
  // }

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
  
  handleCancel = () => {
    console.log(this.props)
  }
  

  createNote = async (event) => {
    const { title, list } = this.state;
    event.preventDefault();
    const savedNote = await saveNewNote(title, list);
    this.saveNewNotesToStore()
    this.props.history.push('/')
    return savedNote;
  }


  saveNewNotesToStore = async () => {
    try {
      const results = await getNotes();
      return this.props.updateNotes(results);
    }
    catch (error) {
      return console.log(error);
    }

  displayTitle = () => {
    this.setState({ titleSet: true })
  }

  render() {

    let listItemsComponents = this.state.list.map((li, index) => {
      console.log('li', index)
      return <ListForm setList={this.setList} textValue={li.text} index={index+1} />
    })
    // const { id, title, listItems } = mockList;

    // console.log(id)
    // const listContents = listItems.map(item => {
    //   return (
    //     <ListItem />
    //     )
    // });

    let titleSection

    (this.state.titleSet) ?
      titleSection = this.state.title :
      titleSection = <TitleForm setTitle={this.setTitle} displayTitle={ this.displayTitle }/>

    return (
      <div>
        { titleSection }
        <ListForm setList={ this.setList } index={0}/>
        {listItemsComponents}
        <button onClick={ this.createNote }>Save</button>


      </div>
      // <section className='form-section'>
      //   <article className='form-container'>
      //     <form className='list-form' onSubmit={this.handleSubmit}>
      //       <input 
      //         className='title-input'
      //         placeholder='title'
      //         onChange={this.handleChange}
      //         value={this.state.title}/>
      //       <button 
      //         className='delete-list-btn' 
      //         // onClick={this.deleteList}
      //         >
      //         Delete List
      //       </button>
      //       <ul className='list'>
      //         {listContents}
      //       </ul>
      //       <button 
      //         className='form-cancel-btn'
      //         // onClick= route to /
      //       >
      //         Cancel
      //       </button> 
      //       <button 
      //         type='submit'
      //         className='save-btn'
      //       >
      //         Save
      //       </button> 
      //     </form>
      //   </article>
      // </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (notes) => dispatch(updateNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
