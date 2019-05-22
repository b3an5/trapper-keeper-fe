export const toggleCompleted = (id) => ({
  type: 'TOGGLE_COMPLETED',
  id
})

// export const deleteItem = (listItem) => {
//   type: 'DELETE_ITEM'
// };

export const updateText = (text, id) =>({
  type: 'UPDATE_TEXT',
  text,
  id
});

