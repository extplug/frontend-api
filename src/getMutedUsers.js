import mutedUsers from 'plug/collections/mutes'
import makeUser from './makeUser'

/**
 * Get all muted users.
 *
 * @return {Array<User>}
 */
export default function getMutedUsers () {
  return mutedUsers.map(user => user.toJSON()).map(makeUser)
}
