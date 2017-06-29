import getUserProfile from './_getUserProfile'

/**
 * Get a user's recent plays.
 *
 * @param {number} id - The user's ID.
 *
 * @return {Promise<Array<HistoryEntry>>}
 */
export default function getUserHistory (id) {
  return getUserProfile(id).then((profile) => profile.history)
}
