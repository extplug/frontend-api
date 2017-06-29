import updateRoom from './updateRoom'

/**
 * Set the level users must be in order to be allowed to chat.
 *
 * @param {number} minChatLevel - Minimum level. Possible levels are 1, 2, 3.
 *
 * @return {Promise<void>}
 */
export default function setMinChatLevel (minChatLevel) {
  return updateRoom({ minChatLevel: minChatLevel })
}
