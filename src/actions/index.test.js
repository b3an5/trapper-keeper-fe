import * as actions from './index';

describe('actions', () => {

  it('should return type UPDATE_NOTES with notes array', () => {
    const mockNotes = [{text: 'test note', id: 824}]

    const expected = {
      type: 'UPDATE_NOTES',
      notes: mockNotes
    }

    expect(actions.updateNotes(mockNotes)).toEqual(expected);
  })
})