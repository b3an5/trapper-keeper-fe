import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { mockNotes } from '../../utils/mockData'
import { saveNote } from '../../actions/index';
import ListItem from '../../Components/ListItem/ListItem';



export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       list: [],
    }
  }
    
  handleSubmit = (e) => {
    const { title, list } = this.state;
    e.preventDefault();
    this.props.saveNote(title, list)
    this.props.history.push('/');
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  
  handleCancel = () => {
    console.log(this.props)
  }
  // addListItem

  render() {
    const { title } = this.state;

    // const { id, title, listItems } = mockNotes[0];
    // console.log(id)
    // const listContents = listItems.map(item => {
    //   return (
    //     <ListItem />
    //     )
    // });

    return (

      <section className='form-section'>
        <article className='form-container'>
          <form className='list-form' onSubmit={ this.handleSubmit }>
            <input 
              name='title'
              className='title-input'
              placeholder='title'
              onChange={this.handleChange}
              value={ title }/>
            <button 
              className='delete-list-btn' 
              // onClick={this.deleteList}
              >
              Delete List
            </button>
            <ul className='list'>
              {/* {listContents} */}
            </ul>
            <button 
              className='form-cancel-btn'
              onClick={ this.handleCancel }
              >
              Cancel
            </button> 
            <button 
              type='submit'
              className='save-btn'
              >
              Save
            </button> 
          </form>
        </article>
        
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  saveNote: (title, listItems) => dispatch(saveNote(title, listItems))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
