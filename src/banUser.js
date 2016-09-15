import BanAction from 'plug/actions/bans/BanAction'
import dispatchAction from './dispatchAction'
import { ATTITUDE } from './BAN_REASON'

export default function banUser(user, reason = ATTITUDE, duration = 'h') {
  return dispatchAction(new BanAction(user.id, reason, duration))
}
