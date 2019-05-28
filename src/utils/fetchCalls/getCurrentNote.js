export const getCurrentNote = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Failed to fetch notes")
  }
  return response.json();
}
// TODO refactor instances of get notes to accept url param and eliminate redundant fn