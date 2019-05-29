import React, { Component } from 'react'
import PropTypes from 'prop-types'
import checkboxHover from '../../images/completed-hover-icon.svg'

class ListForm extends Component {
  constructor() {
    super()

    this.state = {
      text: '',
    }
  }

  componentDidMount() {
    if (this.props.textValue !== '') {
      this.setState({ text: this.props.textValue })
    }
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = async event => {
    event.preventDefault()
    await this.props.setList(this.state.text, this.props.index, this.props.id)
  }

  handleDelete = () => {
    this.props.deleteListItem(this.props.id)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button className="form-complete-btn complete-btn">
          {/* // onClick={() => this.props.toggleCompletedLi(li)}> */}
          <img src={checkboxHover} alt="" className="checkbox-hover" />
        </button>
        <input
          className="list-item-input"
          type="text"
          placeholder="add new"
          name="listItem"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleDelete}
          className="lf-delete-btn round-btn btn"
        >
          x
        </button>
      </form>
    )
  }
}
ListForm.propTypes = {
  setList: PropTypes.func.isRequired,
}

export default ListForm
