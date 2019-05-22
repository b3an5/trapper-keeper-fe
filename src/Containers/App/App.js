import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from '../../Form';

export class App extends Component {

  render() {
    return (
      <main>
        <h1>TrapperKeeper</h1>
        <Form />
      </main>
    )
  }
}


// App.PropTypes = {}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
