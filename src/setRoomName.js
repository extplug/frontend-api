import updateRoom from './updateRoom'

export default function setRoomName(name) {
  return updateRoom({ name: name })
}
