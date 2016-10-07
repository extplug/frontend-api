import updateRoom from './updateRoom'

export default function setRoomWelcomeMessage (welcome) {
  return updateRoom({ welcome: welcome })
}
