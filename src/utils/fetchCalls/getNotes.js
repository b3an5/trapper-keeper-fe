export const getNotes = async () => {
  const url = 'http://localhost:3000/api/v1/notes'
  const response = await fetch(url);
  if (!response.ok) {
    throw Error("Failed to fetch notes")
  }
  return response.json();
}

