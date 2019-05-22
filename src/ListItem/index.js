import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mockList } from '../utils/mockData'
import { updateText, toggleCompleted } from '../actions'


export class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text
    }
  }
  
  handleCheckbox = (id) => {
    this.props.toggleCompleted(id)
  }

  handleTextChange = (e, id) => {
    const { value } = e.target;
    this.setState({text: value})
    this.props.updateText(id, this.state.text)
  }
  // const { id, completed, text } = props.item
  render() {
    const { id, completed, text } = mockList.listItems[0]
    return (
      <li className='list-item'>
        <input 
          type="checkbox" 
          className="checkbox" 
          id={`item-${id}`} 
          {...completed && 'checked'}
          value={text}
          onChange={() => this.handleCheckbox(id)}
          />
        <label 
          for={`item-${id}`} 
          contentEditable
          onChange={() => this.handleTextChange(id)}>
          {text}
        </label>
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  // currentItem: state.currentItem || {}

})

const mapDispatchToProps = (dispatch) => ({
  updateText: (id, text) => dispatch(updateText(id, text)),
  toggleCompleted: (item) => dispatch(toggleCompleted(item))
})

ListItem.propTypes = {
  list: PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
