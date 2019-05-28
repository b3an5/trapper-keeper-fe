/* eslint-disable no-fallthrough */
const initialState = {}

export const currentNoteReducer = (state = initialState,  action) => {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return action.note
    default:
      return state;
  }
}