import dispatchAction from './dispatchAction'
import UserProfileAction from './UserProfileAction'

/**
 * Get a user's profile object.
 *
 * @param {number} id - The user's ID.
 *
 * @private
 */
export default function getUserProfile (id) {
  return dispatchAction(new UserProfileAction(id))
}
