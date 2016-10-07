import updateRoom from './updateRoom'

export default function setRoomDescription (description) {
  return updateRoom({ description: description })
}
