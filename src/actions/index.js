export const toggleCompleted = (id) => ({
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

