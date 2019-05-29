import * as actions from '../actions/index'
import { notesReducer } from './notesReducer'

describe('notesReducer', () => {
  const mockNotes = [
    {
      title: 'test note',
      id: 1,
      listItems: [{ id: 1, text: 'example list item' }],
    },
    {
      title: 'test note two',
      id: 2,
      listItems: [{ id: 1, text: 'test list item' }],
    },
  ]

  it('should return the initial state', () => {
    const expected = []

    const result = notesReducer(undefined, [])

    expect(result).toEqual(expected)
  })

  it('should return the state with current notes', () => {
    const expected = mockNotes

    const result = notesReducer(undefined, actions.updateNotes(mockNotes))

    expect(result).toEqual(expected)
  })
})
