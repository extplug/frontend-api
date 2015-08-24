import users from 'plug/collections/users'
import currentUser from 'plug/models/currentUser'

/**
 * Find a single local user object.
 *
 * @param {number|null} id
 */
export default function getUser(id = null) {
  if (id === null || id === currentUser.get('id')) {
    return currentUser.toJSON()
  }
  let user = users.get(id)
  return user ? user.toJSON() : null
}
