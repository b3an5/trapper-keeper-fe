const initialState = []

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_NOTE':
      return action.notes
    default:
      return state
  }
}