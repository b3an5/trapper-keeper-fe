export const patchNote = async (title, listItems, id) => {
  try {
    const url = `http://localhost:3000/api/v1/notes/${id}`
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        title,
        listItems
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    return await response.json()
  } catch (e) {

    throw new Error(e, 'Unable to save note')
  }
}