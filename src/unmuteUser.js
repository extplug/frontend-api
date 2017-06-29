import UnmuteAction from 'plug/actions/mutes/UnmuteAction'
import dispatchAction from './dispatchAction'

/**
 * Unmute a user.
 *
 * @param {User} user - The user to unmute.
 *
 * @return {Promise<void>}
 */
export default function unmuteUser (user) {
  return dispatchAction(new UnmuteAction(user.id))
}
