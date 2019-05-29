import { getNotes } from './getNotes'

export const deleteNote = async id => {
  try {
    const url = `http://localhost:3000/api/v1/notes/${id}`
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {
        'content-type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const updated = await getNotes()
    return updated
  } catch (e) {
    throw Error('Failed to delete note')
  }
}
