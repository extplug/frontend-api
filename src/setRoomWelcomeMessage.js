import updateRoom from './updateRoom'

/**
 * Set the room's welcome message.
 *
 * @param {string} welcome
 *
 * @return {Promise<void>}
 */
export default function setRoomWelcomeMessage (welcome) {
  return updateRoom({ welcome: welcome })
}
