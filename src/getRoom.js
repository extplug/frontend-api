import currentRoom from 'plug/models/currentRoom'

export default function getRoom() {
  return currentRoom.toJSON()
}
