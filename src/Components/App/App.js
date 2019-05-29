import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Home from '../../Components/Home/Home'
import Form from '../../Containers/Form/Form'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-note" component={Form} />
        <Route exact path="/notes/:id" component={Form} />
      </Switch>
    </>
  )
}

export default withRouter(App)
