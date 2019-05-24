import React, {Component} from 'react';

class TitleForm extends Component {
  constructor() {
    super()

    this.state = {
      title: ''
    }
  }

  handleChange = (event) => {
    this.props.setTitle(event.target.value)
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.setTitle(this.state.title)
  //   this.setState({ title: '' })
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.props.displayTitle}>
          <input
            // contentEditable='true'
            type='text'
            placeholder='Title'
            name='title'
            value={this.state.text}
            onChange={ this.handleChange }
          />
          <button>+</button>
        </form>
      </div>
    )
  }

}

export default TitleForm;