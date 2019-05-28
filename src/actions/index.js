export const updateNotes = (notes) => ({
  type: 'UPDATE_NOTES',
  notes
})

export const toggleCompletedLi = (li) => ({
  type: 'TOGGLE_COMPLETED_LI',
  li
})

export const setCurrentNote = (note) => ({
  type: 'SET_CURRENT_NOTE',
  note
})