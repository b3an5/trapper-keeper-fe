import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../../Containers/Home/Home'


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/new-note' component={ Home } />
      </Switch>
    </>
  );  
}

export default withRouter(App);

