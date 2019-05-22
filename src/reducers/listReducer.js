const initialState = [];

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      return state.map(item => {
        return item.id === action.id ? {...item, completed: !action.isCompleted} : item ;
      });
      // update backend with completed state put/patch
      
    case 'UPDATE_TEXT':
      console.log(state)
      return state.map(item => {
        // return item.id === action.id ? {...item, action.text } : item;
      });

    // case 'DELETE_ITEM':
    default :
      return state;
  }
}
