import updateRoom from './updateRoom'

/**
 * Set the room's description text.
 *
 * @param {string} description
 *
 * @return {Promise<void>}
 */
export default function setRoomDescription (description) {
  return updateRoom({ description: description })
}
