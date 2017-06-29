import currentRoom from 'plug/models/currentRoom'

/**
 * Get data about the current room.
 *
 * @return {Object}
 */
export default function getRoom () {
  return currentRoom.toJSON()
}
