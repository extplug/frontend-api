import users from 'plug/collections/users'
import makeUser from './makeUser'
import { NONE } from './ROLE'

/**
 * Get all staff users that are currently in the room.
 *
 * @return {Array<User>}
 */
export default function getStaffUsers (role = NONE) {
  return users
    .filter(user => user.get('role') >= role)
    .map(user => user.toJSON())
    .map(makeUser)
}
