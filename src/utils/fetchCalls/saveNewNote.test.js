import { saveNewNote } from './saveNewNote'
// import { mockData } from '../mockData';

describe('saveNewNote', () => {
  const mockUrl = 'http://localhost:3000/api/v1/notes'
  const title = 'mock title'
  const listItems = [{ text: 'mock list item' }, { text: 'mock list item 2' }]

  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'Success' }),
    })
  )

  it('should fetch using correct parameters', () => {
    saveNewNote(title, listItems)

    const expectedSecondArgument = {
      method: 'POST',
      body: JSON.stringify({
        title,
        listItems,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedSecondArgument)
  })

  it('should return notes data upon successful fetch', async () => {
    const expected = { message: 'Success' }
    const result = await saveNewNote(title, listItems)

    expect(result).toEqual(expected)
  })

  it('should throw an error if fetch is unsuccessful', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
      })
    )

    expect(saveNewNote(title, listItems)).rejects.toThrow('Error')
  })
})
