import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App/App';
import rootReducer from './reducers'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './base.scss';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));


