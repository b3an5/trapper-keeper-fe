import { combineReducers } from 'redux';
import { listReducer } from './listReducer'

const rootReducer = combineReducers({
  listItem: listReducer,
})

export default rootReducer;