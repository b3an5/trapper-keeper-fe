import { combineReducers } from 'redux';
import { notesReducer } from './notesReducer'
import { currentNoteReducer } from './currentNoteReducer'


const rootReducer = combineReducers({
  notes: notesReducer,
  currentNote: currentNoteReducer
})

export default rootReducer
