const initialState = []

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_NOTE':
      console.log('action.title', action.title)
      let newListItem = { title: action.title, listItems: action.listItems }
      return [...state, newListItem]
    default:
      return state
  }
}