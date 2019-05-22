const initialState = [];

export const listReducer = (state = initialState, action) => {
  console.log('here')
  switch (action.type) {
    case 'SAVE_LIST':
      console.log('list Reducer test')
      let newListItem = {title: action.title, listItems: action.listItems}
      return [...state, newListItem]
    default:
      return state

  }
}