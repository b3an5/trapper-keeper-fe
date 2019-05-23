export const saveNote = (title, listItems) => ({
  type: 'SAVE_NOTE',
  note: {
    title,
    listItems
  }
})
