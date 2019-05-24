import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

// import { mockList } from '../utils/mockData'
// import ListItem from '../ListItem';
import ListForm from '../../Components/ListForm/ListForm';
import TitleForm from '../../Components/TitleForm/TitleForm';
import { saveNote } from '../../actions/index'

export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      list: [],
      titleSet: false
    }
  }
    
  handleSubmit = (e) => {
    const { title, list } = this.state;
    e.preventDefault();
    this.props.saveNote(title, list)
    this.props.history.push('/');
  }

  setTitle = (title) => {
    this.setState({ title })
  }

  setList = (newText) => {
    let newListItem = { text: newText }
    let newList = [...this.state.list, newListItem]
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
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/notes', {
        method: 'POST',
        body: JSON.stringify({
          title: this.state.title,
          listItems: this.state.list
        }),
        headers: {
          'content-type': 'application/json'
        }
      })
      const result = await response.json()
      console.log(result)
      this.saveNewNotesToStore()
    } catch(e){console.log(e)}
  }

  saveNewNotesToStore = () => {
    fetch('http://localhost:3000/api/v1/notes')
    .then(response => response.json())
    .then(results => this.props.saveNote(results))
    .catch(error => console.log(error))
  }

  displayTitle = () => {
    this.setState({ titleSet: true })
  }

  render() {
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
        <ListForm setList={ this.setList }/>
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
  saveNote: (notes) => dispatch(saveNote(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
