import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App/App'
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import './base.scss'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'))
