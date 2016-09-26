import MuteAction from 'plug/actions/mutes/MuteAction'
import dispatchAction from './dispatchAction'
import { ATTITUDE } from './MUTE_REASON'

export default function muteUser(user, reason = ATTITUDE, duration = 's') {
  return dispatchAction(new MuteAction(user.id, reason, duration))
}
