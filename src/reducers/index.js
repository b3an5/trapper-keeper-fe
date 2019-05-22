import { combineReducers } from 'redux';
import { listReducer } from './listReducer'


const rootReducer = combineReducers({
  lists: listReducer
})

export default rootReducer
