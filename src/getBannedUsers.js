import bannedUsers from 'plug/collections/bannedUsers'
import makeUser from './makeUser'

/**
 * Get the banned users.
 *
 * @return {Array<User>}
 */
export default function getBannedUsers () {
  return bannedUsers.map(user => user.toJSON()).map(makeUser)
}
