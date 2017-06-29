import roomHistory from 'plug/collections/history'

/**
 * Get the recent plays in this room.
 *
 * @return Array<HistoryEntry>
 */
export default function getRoomHistory () {
  return roomHistory.map(entry => entry.toJSON())
}
