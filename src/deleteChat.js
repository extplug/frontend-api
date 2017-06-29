import DeleteChatAction from 'plug/actions/rooms/ModerateDeleteChatAction'
import dispatchAction from './dispatchAction'

/**
 * Delete a chat message.
 *
 * @param {string} id - The ID of the message to delete.
 */
export default function deleteChat (id) {
  return dispatchAction(new DeleteChatAction(id))
}
