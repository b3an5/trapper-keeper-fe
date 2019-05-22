import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App';
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './base.scss';

const store = createStore(rootReducer, composeWithDevTools());

const router = (

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)


ReactDOM.render(router, document.getElementById('root'));
