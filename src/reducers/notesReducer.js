const initialState = []

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_NOTES':
      return action.notes
    default:
      return state
  }
}