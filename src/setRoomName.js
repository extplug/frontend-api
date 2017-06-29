import updateRoom from './updateRoom'

/**
 * Set the room's name.
 *
 * @param {string} name
 *
 * @return {Promise<void>}
 */
export default function setRoomName (name) {
  return updateRoom({ name: name })
}
