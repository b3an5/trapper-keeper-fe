const initialState = []

export const listReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_LIST':
      let newListItem = { title: action.title, listItems: action.listItems }
      return [...state, newListItem]
    default:
      return state
  }
}