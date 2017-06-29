import users from 'plug/collections/users'
import makeUser from './makeUser'

/**
 * Get all users currently in the room.
 *
 * @return {Array<User>}
 */
export default function getUsers () {
  return users.map(user => user.toJSON()).map(makeUser)
}
