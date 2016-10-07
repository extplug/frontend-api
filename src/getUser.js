import users from 'plug/collections/users'
import currentUser from 'plug/models/currentUser'
import makeUser from './makeUser'

/**
 * Find a single local user object.
 *
 * @param {number|null} id - The user's ID.
 */
export default function getUser(id = null) {
  if (id === null || id === currentUser.get('id')) {
    return makeUser(currentUser.toJSON())
  }
  let user = users.get(id)
  return user ? makeUser(user.toJSON()) : null
}
