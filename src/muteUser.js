import MuteAction from 'plug/actions/mutes/MuteAction'
import dispatchAction from './dispatchAction'
import { ATTITUDE } from './MUTE_REASON'

/**
 * Mute a user.
 *
 * @param {User} user - The user to mute.
 * @param {number} reason - The reason for the mute. Use one of the `MUTE_REASON` constants.
 * @param {string} duration - 's' for 15 minutes, 'm' for 30 minutes, 'l' for 45 minutes.
 *
 * @return {Promise<void>}
 */
export default function muteUser (user, reason = ATTITUDE, duration = 's') {
  return dispatchAction(new MuteAction(user.id, reason, duration))
}
