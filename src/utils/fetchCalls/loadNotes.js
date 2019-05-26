import { updateNotes } from '../../actions'
import { getNotes } from './getNotes'

export const loadNotes = () => {
  return async (dispatch) => {
    try {
      const latestNotes = await getNotes()
      dispatch(updateNotes(latestNotes))
    } catch (error) {
      throw new Error('Error getting notes')
    }
  }
}