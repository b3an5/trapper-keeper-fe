import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Home from '../../Components/Home/Home'
import Form from '../Form/Form'
import Note from '../Note/Note'
import { getNotes } from '../../utils/fetchCalls/getNotes'
import { updateNotes } from '../../actions/index'


export class App extends Component  {
  componentDidMount = async () => {
     const notes = await getNotes();
     this.props.updateNotes(notes)
  }

  render() {
    return(
      <>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/new-note' component={ Form } />
          <Route exact path='/notes/:id' component={ Form } />
        </Switch>
      </>
    );
  }  
}

App.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateNotes: PropTypes.func.isRequired,
}


export const mapStateToProps = (state) => ({
  notes: state.notes || []
})

export const mapDispatchToProps = (dispatch) => ({
  updateNotes: (notes) => dispatch(updateNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

