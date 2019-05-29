const initialState = []

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NOTES':
      return action.notes
    case 'TOGGLE_COMPLETED_LI':
      return state.map(not => {
        return {
          ...not,
          listItems: not.listItems.map(listItem => {
            if (listItem.id === action.li.id) {
              return {
                id: listItem.id,
                completed: !listItem.completed,
                text: listItem.text,
              }
            }
            return listItem
          }),
        }
      })
    default:
      return state
  }
}
