export const deleteCard = async (id) => {
  try {
    const url = `http://localhost:3000/api/v1/notes/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify({}),
      headers: {
        'content-type': 'application/json'
      }
    })
    const result = await response.json()
    console.log(result)
    this.saveNewNotesToStore()
  } catch (e) {
    console.log(e)
  }
}