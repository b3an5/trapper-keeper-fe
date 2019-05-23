const initialState = []

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_NOTE':
      return [...state, {
        title: action.note.title,
        listItems: action.note.listItems
      }];
    default:
      return state
  }
}