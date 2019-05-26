import { getNotes } from "./getNotes";


export const saveNewNote = async (title, listItems) => {
  try {
    const url = 'http://localhost:3000/api/v1/notes'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        title,
        listItems
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    if (!response.ok) {
      throw Error(response.statusText)
    }
   const updated = await getNotes();
   return updated;
  } catch (e) {
    throw new Error(e, 'Unable to save note')
  }
}
