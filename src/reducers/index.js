import { combineReducers } from 'redux';
import { listReducer } from './listReducer'

export const rootReducer = combineReducers({
  lists: listReducer
})

export default rootReducer;