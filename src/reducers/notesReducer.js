const initialState = []

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_NOTE':
      console.log('action.title', action.title)
      let note = { title: action.title, listItems: action.listItems }
      console.log('state', state)
      return {...state, notes: [state.notes, note]} 
    default:
      return state
  }
}