const initialState = [];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      return list.map(item => {
        return item.id === action.id ? {...item, completed: !action.isCompleted} : item });
      // update backend with completed state put/patch
      
    case 'UPDATE_TEXT':
      return list.map(item => {
        return item.id === action.id ? {...item, text } : item;
      });

    // case 'DELETE_ITEM':
    default :
      return state;
  }
}
