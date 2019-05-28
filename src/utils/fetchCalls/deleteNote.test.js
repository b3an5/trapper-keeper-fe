import { deleteNote } from './deleteNote';

describe('deleteNote', () => {
  const mockNoteId = 824;


  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ok: true, message: 'deleted'})
    }))

    it('should delete specific note based on param', () => {
      const expectedUrl = `http://localhost:3000/api/v1/notes/${mockNoteId}`
      const expectedSecondArgument = {
        method: 'DELETE',
        body: JSON.stringify({}),
        headers: {
          'content-type': 'application/json'
        }
      }
      deleteNote(mockNoteId);
      expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedSecondArgument)
    });

    it('should return happy response upon deletion', async () => {
      const expected = {ok: true, message: 'deleted'};
      const result = await deleteNote(mockNoteId);

      expect(result).toEqual(expected)
    });

    it('should throw an error for sad path', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false
      }))
      await expect(deleteNote(mockNoteId)).rejects.toThrow('Failed to delete note');
    });
})