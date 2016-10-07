import BanAction from 'plug/actions/bans/BanAction'
import dispatchAction from './dispatchAction'
import { ATTITUDE } from './BAN_REASON'

/**
 * Ban a user.
 *
 * @param user - User to ban.
 * @param reason - Reason for the ban.
 * @param duration - Length of the ban.
 */
export default function banUser (user, reason = ATTITUDE, duration = 'h') {
  return dispatchAction(new BanAction(user.id, reason, duration))
}
