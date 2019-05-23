import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { mockNotes } from '../../utils/mockData'
import ListItem from '../../Components/ListItem/ListItem';



export class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       list: []
    }
  }
    
  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    const { name, value } = this.state
  }

  handleCancel = () => {
    console.log(this.props)
  //  return <Redirect to = '/'/>;
  }
  // addListItem

  render() {
    const { id, title, listItems } = mockNotes[0];
    console.log(id)
    const listContents = listItems.map(item => {
      return (
        <ListItem />
        )
    });
    return (
      <section className='form-section'>
        <article className='form-container'>
          <form className='list-form' onSubmit={this.handleSubmit}>
            <input 
              className='title-input'
              placeholder='title'
              onChange={this.handleChange}
              value={this.state.title}/>
            <button 
              className='delete-list-btn' 
              // onClick={this.deleteList}
              >
              Delete List
            </button>
            <ul className='list'>
              {listContents}
            </ul>
            <Link
              to='/'
              className='cancel-link'>
              <button 
                className='form-cancel-btn'
                // onClick={this.handleCancel}
                >
                Cancel
              </button> 
            </Link>
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
  
})

export const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
