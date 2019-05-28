/* eslint-disable no-fallthrough */
const initialState = {}

export const currentNoteReducer = (state = initialState,  action) => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      console.log('setCurrentNote state', state, 'action.note', action.note)
      return action.note
    default:
      return state;
  }
}