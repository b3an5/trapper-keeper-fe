import React, {Component} from 'react';

class TitleForm extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setTitle(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>+</button>
        </form>
      </div>
    )
  }

}

export default TitleForm;