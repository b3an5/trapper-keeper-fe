export const getCurrentNote = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Failed to fetch notes")
  }
  let note = await response.json();
  const noteToEdit = await {
    id: note.id,
    listItems: note.listItems,
    title: note.title
  }
  return noteToEdit
}
// TODO refactor instances of get notes to accept url param and eliminate redundant fn