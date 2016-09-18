import updateRoom from './updateRoom'

export default function setMinChatLevel(minChatLevel) {
  return updateRoom({ minChatLevel: minChatLevel })
}
